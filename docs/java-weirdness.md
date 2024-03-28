# Java weirdness

_One does not equal one_

```java
System.out.println(new Integer(1) == new Integer(1)); //prints false
```

Explanation: the equality operator checks if you are comparing the same objects not the same value.

_Same strings aren't always the same_

```java
System.out.println("a" == "a"); //true
String a = "a";
String b = "a";
System.out.println(a == b); //true
String c = new String("a");
String d = "a";
System.out.println(c == d); //false
```

_Strongly typed language, except when it's not_

```java
Integer foo = 5;
int bar = 5;
System.out.println(foo == bar); //true
```

_Interesting list to array conversion API_

```java
List<String> stringList = new ArrayList<String>();
stringList.add("Lorem");
stringList.add("Ipsum");
String[] stringArray = stringList.toArray(new String[stringList.size()]);
```
