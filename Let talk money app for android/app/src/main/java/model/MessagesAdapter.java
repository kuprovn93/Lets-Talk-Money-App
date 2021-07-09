package model;

import android.content.Context;
import android.text.format.DateFormat;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.socialboard.R;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.Date;


public class MessagesAdapter extends RecyclerView.Adapter {

    Context context;
    ArrayList<Messages> messagesArrayList;
    FirebaseAuth fAuth;
    FirebaseFirestore fStore = FirebaseFirestore.getInstance();
    int ITEM_SEND = 1;
    int ITEM_RECEIVE = 2;

    public MessagesAdapter(Context context, ArrayList<Messages> messagesArrayList) {
        this.context = context;
        this.messagesArrayList = messagesArrayList;
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull  ViewGroup parent, int viewType) {
        if (viewType==1){
            View view = LayoutInflater.from(context).inflate(R.layout.sender_layout_item, parent, false);
            return new SenderViewHolder(view);
        }
        else {
            View view = LayoutInflater.from(context).inflate(R.layout.receiver_layout, parent, false);
            return new ReceiverViewHolder(view);
        }
    }

    @Override
    public void onBindViewHolder(@NonNull  RecyclerView.ViewHolder holder, int position) {
        Messages messages = messagesArrayList.get(position);
        if (holder.getClass()==SenderViewHolder.class){
            SenderViewHolder viewHolder = (SenderViewHolder) holder;
            viewHolder.textMessage.setText(messages.getMessage());
            viewHolder.userName.setText("You");
            viewHolder.msgTime.setText(DateFormat.format("MM/dd/yyyy", new Date(messages.getTimestamp())).toString());
        }else{
            ReceiverViewHolder viewHolder = (ReceiverViewHolder) holder;
            viewHolder.textMessage.setText(messages.getMessage());
            viewHolder.userName.setText(messages.getSenderUserName());
            viewHolder.msgTime.setText(DateFormat.format("MM/dd/yyyy", new Date(messages.getTimestamp())).toString());

        }
    }

    @Override
    public int getItemCount() {
        return messagesArrayList.size();
    }

    @Override
    public int getItemViewType(int position) {
        Messages message = messagesArrayList.get(position);
        if (FirebaseAuth.getInstance().getCurrentUser().getUid().equals(message.getSenderID())){
            return ITEM_SEND;
        }else{
            return ITEM_RECEIVE;
        }
    }

    class SenderViewHolder extends RecyclerView.ViewHolder{
        TextView textMessage, userName, msgTime;

        public SenderViewHolder(@NonNull View itemView) {
            super(itemView);
            textMessage = itemView.findViewById(R.id.txtMessages);
            userName = itemView.findViewById(R.id.messageUsername);
            msgTime = itemView.findViewById(R.id.messageTime);
        }
    }
    class ReceiverViewHolder extends RecyclerView.ViewHolder{
        TextView textMessage, userName, msgTime;


        public ReceiverViewHolder(@NonNull  View itemView) {
            super(itemView);
            textMessage = itemView.findViewById(R.id.txtMessages);
            userName = itemView.findViewById(R.id.messageUsername);
            msgTime = itemView.findViewById(R.id.messageTime);
        }
    }
}
