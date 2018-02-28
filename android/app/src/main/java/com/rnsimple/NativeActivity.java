package com.rnsimple;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class NativeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);
        findViewById(R.id.btn_gorn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Intent intent = new Intent(NativeActivity.this,MainActivity.class);
//                startActivity(intent);
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                Uri uri = Uri.parse("demo2://demo2/app/event");
                intent.setData(uri);
                startActivity(intent);
            }
        });
        findViewById(R.id.btn_native).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(NativeActivity.this,MainActivity.class);
                intent.putExtra("type",1);
                intent.putExtra("message","Event");
                startActivity(intent);
            }
        });

        findViewById(R.id.btn_aaa).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(NativeActivity.this,MainActivity.class);
                intent.putExtra("flag",1);
                startActivity(intent);
            }
        });

    }
}
