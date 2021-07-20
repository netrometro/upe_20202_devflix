package com.example.models;

import java.lang.reflect.Array;

public class MetadataModel extends GenericEntity{
    private int id;
    private String videoLink;
    private String title;
    private String description;
    private String videoYoutubeChannel;
    private Array tags;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVideoLink() {
        return videoLink;
    }

    public void setVideoLink(String videoLink) {
        this.videoLink = videoLink;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideoYoutubeChannel() {
        return videoYoutubeChannel;
    }

    public void setVideoYoutubeChannel(String videoYoutubeChannel) {
        this.videoYoutubeChannel = videoYoutubeChannel;
    }

    public Array getTags() {
        return tags;
    }

    public void setTags(Array tags) {
        this.tags = tags;
    }
}
