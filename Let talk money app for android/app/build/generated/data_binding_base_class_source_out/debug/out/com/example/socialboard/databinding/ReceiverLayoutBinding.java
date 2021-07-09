// Generated by view binder compiler. Do not edit!
package com.example.socialboard.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import com.example.socialboard.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ReceiverLayoutBinding implements ViewBinding {
  @NonNull
  private final RelativeLayout rootView;

  @NonNull
  public final TextView messageTime;

  @NonNull
  public final TextView messageUsername;

  @NonNull
  public final TextView txtMessages;

  private ReceiverLayoutBinding(@NonNull RelativeLayout rootView, @NonNull TextView messageTime,
      @NonNull TextView messageUsername, @NonNull TextView txtMessages) {
    this.rootView = rootView;
    this.messageTime = messageTime;
    this.messageUsername = messageUsername;
    this.txtMessages = txtMessages;
  }

  @Override
  @NonNull
  public RelativeLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ReceiverLayoutBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ReceiverLayoutBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.receiver_layout, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ReceiverLayoutBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.messageTime;
      TextView messageTime = rootView.findViewById(id);
      if (messageTime == null) {
        break missingId;
      }

      id = R.id.messageUsername;
      TextView messageUsername = rootView.findViewById(id);
      if (messageUsername == null) {
        break missingId;
      }

      id = R.id.txtMessages;
      TextView txtMessages = rootView.findViewById(id);
      if (txtMessages == null) {
        break missingId;
      }

      return new ReceiverLayoutBinding((RelativeLayout) rootView, messageTime, messageUsername,
          txtMessages);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
