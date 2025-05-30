<img width="521" alt="Pasted Graphic 4" src="https://github.com/user-attachments/assets/785a2eec-2a38-4ae9-9e4f-77df4c40a3ce" />

1. I used database access using db.execAsync() instead of undefined tx.execAsync().

<img width="521" alt="Pasted Graphic 8" src="https://github.com/user-attachments/assets/e521f344-f313-4397-a0f0-a9d60d2405cd" />

2. Replaced result.rows.length with result.length.

<img width="521" alt="Pasted Graphic 10" src="https://github.com/user-attachments/assets/a1d41077-6bcd-4c8a-a9a9-a0f8ecdc9dd4" />

3. The <Button> component was not imported.

<img width="521" alt="Pasted Graphic 11" src="https://github.com/user-attachments/assets/64d77a24-15e8-4c8c-a526-1265bee41876" />

4. Replaced Camera with CameraView.

<img width="521" alt="Pasted Graphic 13" src="https://github.com/user-attachments/assets/0969325d-166f-4365-890f-a8d0f9993c3c" />

5. I decided to use lastInsertRowId rather than insertId to transmit the correct information instead of undefined.

<img width="521" alt="Pasted Graphic 15" src="https://github.com/user-attachments/assets/4b9f43de-34a4-4acc-8d41-c9feecf63fd0" />

6. I used the rows object directly, not rows._array.

<img width="521" alt="Pasted Graphic 12" src="https://github.com/user-attachments/assets/e9621786-f436-4ec6-843c-0a60b20a4f08" />

``` js
filterPicker: {
    height: Platform.OS === 'ios' ? undefined : 40,
    width: '100%',
  },
```

Fixed picker display for iOS.

<img width="521" alt="Pasted Graphic 17" src="https://github.com/user-attachments/assets/be8e7238-20c9-43c7-8ccb-03b44286f16c" />

8. getAllAsync() for SELECT and runAsync() for INSERT/UPDATE/DELETE
   ``` js
   const getAllSql = async (query, params = []) => {
      try {
        if (!isInitialized) {
          await initDatabase();
        }
        
        return await db.getAllAsync(query, params);

      } catch (error) {
        console.error('SQL getting data error:', error);
        throw error;
      }
    };

    const runQuery = async (query, params = []) => {
      try {
        if (!isInitialized) {
          await initDatabase();
        }
        return await db.runAsync(query, params);
      } catch (error) {
        console.error('SQL mutation error:', error);
        throw error;
      }
    };

   ```

<img width="521" alt="Pasted Graphic 18" src="https://github.com/user-attachments/assets/0fd246f1-7f26-4a9a-8e9f-b0c40725a492" />

9. Changed
```js
const filteredJournals = category === 'All'
  ? journals
  : journals.filter((item) => item.category === category);
```
with
```js
const filteredJournals = category === 'All'
  ? journals ?? []
  : (journals ?? []).filter((item) => item.category === category);
```
for protection

<img width="521" alt="Pasted Graphic 19" src="https://github.com/user-attachments/assets/768e30a9-d222-49f3-944f-406db9dadd8c" />

10. Solution: disable scrolling in SwipeListView. Also I added ScrollView tag for scrolling page.

### Changes
<img width="521" alt="image" src="https://github.com/user-attachments/assets/555066ec-f89e-4ecd-8c10-2107beb976b1" />
<img width="521" alt="image" src="https://github.com/user-attachments/assets/cbc04d7f-6d42-4efd-b4fb-5932f0b504eb" />

1. Some changes in the style of the buttons. 

2. A button has also been added to view details about the dish - a description of the dish.
   
4. Added a rating and description for the dishes


# Installation

1. Clone the repository
2. Installing dependencies:
   ```bash
   npm install
    ```
3. Start the Metro Bundler:
   ```bash
   npm start
    ```

Before launching, make sure that the following are installed:

- Node.js

- Expo CLI

- Expo Go

# Running the App

Open a new terminal and run:

for iOS:
```bash
npm run ios
```

for Android:
```bash
npm run android
 ```

