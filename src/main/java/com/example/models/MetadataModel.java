package com.example.models;

import java.lang.reflect.Array;

public class MetadataModel extends GenericEntity{
    private int metadataId;
    private String metadataVideoLink;
    private String metadataTitle;
    private String metadataDescription;
    private String metadataVideoYoutubeChannel;
    private Array metadataTags;
    
    public int getMetadataId() {
        return metadataId;
    }
    public void setMetadataId(int metadataId) {
        this.metadataId = metadataId;
    }
    public String getMetadataVideoLink() {
        return metadataVideoLink;
    }
    public void setMetadataVideoLink(String metadataVideoLink) {
        this.metadataVideoLink = metadataVideoLink;
    }
    public String getMetadataTitle() {
        return metadataTitle;
    }
    public void setMetadataTitle(String metadataTitle) {
        this.metadataTitle = metadataTitle;
    }
    public String getMetadataDescription() {
        return metadataDescription;
    }
    public void setMetadataDescription(String metadataDescription) {
        this.metadataDescription = metadataDescription;
    }
    public String getMetadataVideoYoutubeChannel() {
        return metadataVideoYoutubeChannel;
    }
    public void setMetadataVideoYoutubeChannel(String metadataVideoYoutubeChannel) {
        this.metadataVideoYoutubeChannel = metadataVideoYoutubeChannel;
    }
    public Array getMetadataTags() {
        return metadataTags;
    }
    public void setMetadataTags(Array metadataTags) {
        this.metadataTags = metadataTags;
    }

}
