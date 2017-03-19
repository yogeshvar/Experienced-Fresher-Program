package com.example.root.listview;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.view.ViewPropertyAnimatorCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

/**
 * Created by root on 18/3/17.
 */

public class vishnu extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vishnu);}


public void socialvishnu(View v)
{
  //  try {
    //    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(
      //          "http://www.facebook.com/"));
      //  startActivity(browserIntent);
   // } catch (Exception e) {
        Toast.makeText(this, "Update your app", Toast.LENGTH_SHORT).show();
        //     startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.facebook.com/")));
   // }
}
}
