package br.upe.devflix.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import com.google.api.services.youtube.YouTube;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import com.google.api.services.youtube.model.Video;

public class YouTubeService {


  private static YouTube youtube = 
      new YouTube.Builder(new NetHttpTransport(), new JacksonFactory(), new HttpRequestInitializer() {
        public void initialize(HttpRequest request) throws IOException {
        }
      }).setApplicationName("Devflix").build();

  private static final String API_KEY = "AIzaSyB7CFY0eRyt5NDINZfb0U5A_Ikl3xbOoCg";
  private static final long NUMBER_OF_VIDEOS_RETURNED = 10;


  //Retorna os metadados do vídeo a partir do seu ID;
  public HashMap<String, String> getVideoMetadata(String videoId) throws IOException {
    YouTube.Videos.List search = youtube.videos().list("id,snippet");
    search.setId(videoId);
    search.setKey(API_KEY);

    List<Video> youtubeSearchResponse = search.execute().getItems();
    Video video = youtubeSearchResponse.get(0);

    HashMap<String, String> metadata = new HashMap<String, String>();
    metadata.put("id", videoId);
    metadata.put("url", getVideoUrl(videoId));
    metadata.put("title", video.getSnippet().getTitle());
    metadata.put("description", video.getSnippet().getDescription());
    metadata.put("thumb", video.getSnippet().getThumbnails().getDefault().getUrl());
    return metadata;
  }
  //Pesquisa os vídeos a partir de uma palavra-chave e retorna uma lista com vídeos relacionados e seus respectivos metadados
  public List<SearchResult> getVideoSearch(String query) throws IOException {
    YouTube.Search.List search = youtube.search().list("id,snippet");
    search.setQ(query);
    search.setKey(API_KEY);
    search.setType("video");
    search.setFields("items(id/videoId,snippet/title,snippet/description,snippet/thumbnails/default/url)");
    search.setMaxResults(NUMBER_OF_VIDEOS_RETURNED);

    SearchListResponse searchResponse = search.execute();
    List<SearchResult> searchResultList = searchResponse.getItems();

    return searchResultList;
  }

  public String getVideoUrl(String videoId) {
    return ("https://www.youtube.com/watch?v=" + videoId);
  }

}