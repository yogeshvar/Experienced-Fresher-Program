# theTeam(v 0.0.1)

Getting started with app development basics



# What is theTeam?

 * Gives theTeam members details like College name,department,their Facebook Accounts link.
 
# Used functions and Classes
And here's some code! :):

* Using ArrayAdapter to display in the Listview 
```
 public void populateListView()
    {
        String [] BharathiGroup = {"Dinesh","Sanjeev",
        						   "Iswaraya","Pranitha",
                                   "Vishnu","Maggie",
                                   "Team Leader"+"\n"+"Bharathi"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,R.layout.items,R.id.textview,BharathiGroup);
        ListView list = (ListView) findViewById(R.id.listview);
        list.setAdapter(adapter);
        list.setOnItemClickListener(this);
    }
```
* Using Intent to navigate through pages
```
 Intent newintent = new Intent(getApplicationContext(),nextclass.class);
 startActivity(dinesh);

```

This is [on GitHub](https://github.com/yogeshvar/theTeam) so let me know if you have any issues.



### Stuff used to make this:

 * [youtube](https://youtube.com) for ArrayAdapater
 * [Android Developers](https://developer.android.com/index.html) for Intenting.
 * [stackoverflow](http://stackoverflow.com) for setting up the gradle
 
