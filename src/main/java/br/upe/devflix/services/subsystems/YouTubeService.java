package br.upe.devflix.services.subsystems;

import java.io.IOException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.http.javanet.NetHttpTransport;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.Video;
import com.google.api.services.youtube.model.SearchResult;
import com.google.api.services.youtube.model.SearchListResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class YouTubeService {

  //Conecta com a cliente da API do Youtube.
  private YouTube youtube = new YouTube.Builder(
    new NetHttpTransport(), 
    new JacksonFactory(), 
    new HttpRequestInitializer() {
      public void initialize(HttpRequest request) throws IOException { }
    }).setApplicationName("Devflix").build();
  
  //Chave da API do Youtube
  @Value("${devflix.youtube.apikey}")
  private String YoutubeApiKey;

  //Número de vídeos que serão retornados na busca
  private static final long MaxVideosPerPage = 15;

  /**
   * Retorna os metadados do vídeo a partir do seu ID
   * 
   * @param videoId O ID do vídeo no Youtube.
   * @return Retorna os metadados do vídeo em formato de HashMap.
   */
  public HashMap<String, String> getVideoMetadata(String videoId) {
    try {
      YouTube.Videos.List search = youtube.videos()
        .list("id,snippet")
        .setId(videoId)
        .setKey(YoutubeApiKey);
  
      List<Video> youtubeSearchResponse = search.execute().getItems();
      Video video = youtubeSearchResponse.get(0);
  
      HashMap<String, String> metadata = new HashMap<String, String>();
      metadata.put("id", videoId);
      metadata.put("url", getVideoUrl(videoId));
      metadata.put("title", video.getSnippet().getTitle());
      metadata.put("description", video.getSnippet().getDescription());
      metadata.put("thumb", video.getSnippet().getThumbnails().getHigh().getUrl());
      metadata.put("channelName", video.getSnippet().getChannelTitle());
  
      return metadata;
    } catch (Exception exception){
      return new HashMap<String, String>();
    }
  }

  /**
   * Pesquisa os vídeos a partir de uma palavra-chave e retorna uma lista com vídeos relacionados e seus respectivos metadados.
   * 
   * @param query A string a ser consultada no Youtube.
   * @return Retorna uma lista de vídeos contendo suas informações diretamente do youtube.
   */
  public List<HashMap<String, String>> getVideoSearch(String query) {
    try {
      YouTube.Search.List search = youtube.search()
        .list("id,snippet")
        .setKey(YoutubeApiKey)
        .setQ(query)
        .setType("video")
        .setFields("items(id/videoId,snippet/title,snippet/description,snippet/thumbnails/high/url)")
        .setMaxResults(MaxVideosPerPage);

      SearchListResponse searchResponse = search.execute();
      List<SearchResult> searchResultList = searchResponse.getItems();
      List<HashMap<String,String>> videoMetadataList = new ArrayList<>(); 

      for (SearchResult video : searchResultList) {
        HashMap<String, String> metadata = new HashMap<String, String>();
        metadata.put("id", video.getId().getVideoId());
        metadata.put("url", getVideoUrl(video.getId().getVideoId()));
        metadata.put("title", video.getSnippet().getTitle());
        metadata.put("description", video.getSnippet().getDescription());
        metadata.put("thumb", video.getSnippet().getThumbnails().getHigh().getUrl());
        metadata.put("channelName", video.getSnippet().getChannelTitle());
        videoMetadataList.add(metadata);
      }
      return videoMetadataList;
    } catch(Exception exception){
      return new ArrayList<HashMap<String, String>>();
    }
  }

  /**
   * Retorna o valor da url a apartir do ID do vídeo,
   * 
   * @param videoId O ID do vídeo no Youtube.
   * @return A url do vídeo no youtube.
   */
  public String getVideoUrl(String videoId) {
    return "https://www.youtube.com/watch?v=" + videoId;
  }

}