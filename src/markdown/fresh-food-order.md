# Task Description
A fresh food supplier sells product items to customers in packs. The bigger the pack, the cheaper the cost per item.

The supplier currently sells the following products

| Product      | Packs |
| :---:        |    :---:   |    
| Watermelons      | 3 pack @ $6.99       |
|       |5 pack @ $8.99       |
| Pineapples      | 2 pack @ $9.95       |
|       |5 pack @ $16.95       |
|       |8 pack @ $24.95       |
| Rockmelons      | 3 pack @ $5.95       |
|       |5 pack @ $9.95       |
|       |9 pack @ $16.99       |

Your task is to build a system that can take a customer order...

For example, something like:

10 Watermelons
14 Pineapples
13 Rockmelons
And generate an invoice for the order...

For example, something like:

10 Watermelons         $17.98
   - 2 x 5 pack @ $8.99
14 Pineapples          $54.80
   - 1 x 8 pack @ $24.95
   - 3 x 2 pack @ $9.95
13 Rockmelons          $25.85
   - 2 x 5 pack @ $9.95
   - 1 x 3 pack @ $5.95
-----------------------------
TOTAL                  $98.63
Note that the system has determined the optimal packs to fill the order. You can assume that bigger packs will always have a cheaper cost per unit price.

Advice:

The exact method & format of input/output is not important
Write code you will be happy to put into production
We like tests at Fresho... hint hint ;)
Make sure your code handles the given example.
If something is not clear don’t hesitate to ask, or just make an assumption and go with it
It's just an exercise, so no need to go overboard or spend too long on it :)