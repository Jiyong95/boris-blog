import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import ListPage from './pages/list';
import DetailPage from './pages/detail';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 
          * TODO 1.
          * [로딩 최적화 - 코드 스플릿팅] 
          * 각 페이지 별로 필요한 모듈이 따로 있지만 하나의 번들파일로 되어 있습니다.
        */}
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

reportWebVitals(console.log);