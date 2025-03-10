package com.brentvatne.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import androidx.core.content.ContextCompat;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.AudioManager;

import androidx.core.content.ContextCompat;

public class AudioBecomingNoisyReceiver extends BroadcastReceiver {

    private final Context context;
    private BecomingNoisyListener listener = BecomingNoisyListener.NO_OP;

    public AudioBecomingNoisyReceiver(Context context) {
        this.context = context.getApplicationContext();
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (AudioManager.ACTION_AUDIO_BECOMING_NOISY.equals(intent.getAction())) {
            listener.onAudioBecomingNoisy();
        }
    }

    public void setListener(BecomingNoisyListener listener) {
        this.listener = listener;
        IntentFilter intentFilter = new IntentFilter(AudioManager.ACTION_AUDIO_BECOMING_NOISY);
        ContextCompat.registerReceiver(context, this, intentFilter, ContextCompat.RECEIVER_NOT_EXPORTED);
    }

    public void removeListener() {
        this.listener = BecomingNoisyListener.NO_OP;
        try {
            context.unregisterReceiver(this);
        } catch (Exception ignore) {
            // ignore if already unregistered
        }
    }
}
