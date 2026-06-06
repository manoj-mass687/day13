# pivot 

import pandas as pd

df = pd.DataFrame({'A': ['John', 'Jane', 'Jim', 'Jack'],
                   'B': ['Math', 'Math', 'Science', 'Science'],
                   'C': [85, 90, 78, 92]
})  

df = df.pivot(index='A', columns='B', values=['C','A'])

print(df)