import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import QuizDetails from './Components/QuizDetails/QuizDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>

        },
        {
          path: '/topics/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {

          path: 'blog',
          element: <Blog></Blog>

        }

      ],
    }
  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
