package com.example.root.listview;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

import java.util.List;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        populateListView();

    }

    public void populateListView()
    {
        String [] BharathiGroup = {"Dinesh","Sanjeev","Iswaraya","Pranitha","Vishnu","Maggie","Team Leader"+"\n"+"Bharathi"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,R.layout.items,R.id.textview,BharathiGroup);
        ListView list = (ListView) findViewById(R.id.listview);
        list.setAdapter(adapter);
        list.setOnItemClickListener(this);
    }



    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

        switch(position)
        {
            case 0:
                Toast.makeText(this, "Clicked Dinesh ", Toast.LENGTH_SHORT).show();
                Intent dinesh = new Intent(getApplicationContext(),dinesh.class);
                startActivity(dinesh);
                break;
            case 1:
                Toast.makeText(this, "Clicked Sanjeev", Toast.LENGTH_SHORT).show();
                Intent sanjeev = new Intent(getApplicationContext(),sanjeev.class);
                startActivity(sanjeev);
                break;
            case 2:
            Toast.makeText(this, "Clicked Iswaraya", Toast.LENGTH_SHORT).show();
                Intent iswaraya = new Intent(getApplicationContext(),iswaraya.class);
                startActivity(iswaraya);
                break;
            case 3:
                Toast.makeText(this, "Clicked Pranitha", Toast.LENGTH_SHORT).show();
                Intent pranitha = new Intent(getApplicationContext(),pranitha.class);
                startActivity(pranitha);

                break;
            case 4:
                Toast.makeText(this, "Clicked Vishnu", Toast.LENGTH_SHORT).show();
                Intent vishnu = new Intent(getApplicationContext(),vishnu.class);
                startActivity(vishnu);

                break;
            case 5:
                Toast.makeText(this, "Clicked Maggie", Toast.LENGTH_SHORT).show();
                Intent maggie = new Intent(getApplicationContext(),maggie.class);
                startActivity(maggie);

                break;
            case 6:
                Toast.makeText(this,"Sorry Team leader data can't be show in app,its huge",Toast.LENGTH_SHORT).show();
                break;
        }
    }
}
