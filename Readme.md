### Notes
 
- ```/api/welcome``` : 
    eg of memory leak :
        for variables and object , js allocates memory and is automaticall garbage collected by js engine
        for stack we store primitve types
        in heap we store reference type like object, function, arrays
        gc algorithm : reference algo(unreferenced variable) & mark/sweep(for variables that are not accessible)
     
     eg : 
<--- Last few GCs --->

11629672 ms: Mark-sweep 1174.6 (1426.5) -> 1172.4 (1418.3) MB, 659.9 / 0 ms [allocation failure] [GC in old space requested].
11630371 ms: Mark-sweep 1172.4 (1418.3) -> 1172.4 (1411.3) MB, 698.9 / 0 ms [allocation failure] [GC in old space requested].
11631105 ms: Mark-sweep 1172.4 (1411.3) -> 1172.4 (1389.3) MB, 733.5 / 0 ms [last resort gc].
11631778 ms: Mark-sweep 1172.4 (1389.3) -> 1172.4 (1368.3) MB, 673.6 / 0 ms [last resort gc].