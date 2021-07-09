package model;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.socialboard.Board;
import com.example.socialboard.ChatActivity;
import com.example.socialboard.MainActivity;
import com.example.socialboard.R;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;

import de.hdodenhof.circleimageview.CircleImageView;

public class BoardAdapter extends RecyclerView.Adapter<BoardAdapter.ViewHolder> {
    Context boardActivity;
    ArrayList<Boards> boardArrayList;
    public BoardAdapter(Board boardActivity, ArrayList<Boards> boardArrayList) {
        this.boardActivity = boardActivity;
        this.boardArrayList = boardArrayList;

    }

    @NotNull
    @Override
    public BoardAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.main_users_row, parent, false);
        return new BoardAdapter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull @NotNull BoardAdapter.ViewHolder holder, int position) {
        Boards boards = boardArrayList.get(position);
        System.out.println("Board"+ boards);
        holder.boardName.setText(boards.boardName);

        // onclick on the user chat start\
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println("Inside on click view");
                Intent chatIntent = new Intent(boardActivity, ChatActivity.class);
                chatIntent.putExtra("boardName", boards.getBoardName());
                chatIntent.putExtra("boardUid", boards.getBoardUid());
                boardActivity.startActivity(chatIntent);
            }
        });
        //  onclick on the user chat end
    }


    @Override
    public int getItemCount() {
        return boardArrayList.size();
    }

    class ViewHolder extends  RecyclerView.ViewHolder {

        TextView boardName;


        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            boardName = itemView.findViewById(R.id.board_name);

        }
    }
}
