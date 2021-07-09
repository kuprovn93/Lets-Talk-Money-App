package model;

public class Messages {
    String message;
    String senderID;
    String senderUserName;
    long timestamp;

    public Messages() {
    }

    public Messages(String message, String senderID, String senderUserName ,long timestamp) {
        this.message = message;
        this.senderID = senderID;
        this.senderUserName = senderUserName;
        this.timestamp = timestamp;

    }

    public String getSenderUserName() {
        return senderUserName;
    }

    public void setSenderUserName(String senderUserName) {
        this.senderUserName = senderUserName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSenderID() {
        return senderID;
    }

    public void setSenderID(String senderID) {
        this.senderID = senderID;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
