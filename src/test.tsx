// useState: 関数に状態を持たせるためのReactの機能
import React,{useState} from 'react';
import './App.css';
import { parse } from 'path';

function App() {
  const [numInp, setNumInp] = useState("");
  const [calcResult, setCalcResult] = useState(0);
  const [isNumInp, setIsNumInp] = useState(false);
  const mathClick = () => {
    var num = determineNum(numInp);
    setCalcResult(num*2);
  };

  // input
  const determineNum = (v:any) => {
    if(isFinite(v)){
      // 文字列を数値に変換
      const num = parseInt(v);
      const ans = num + num;
      console.log(ans);
      return num;
    } else {
        const ans = v + "には半角数字以外の入力が含まれています。"
        console.log(ans);
        return 0;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>二倍したい値を入力するのだ！</p>
        <p>
          <input type="text" value={numInp}/>
          <button className="calcButton" onClick={mathClick}>2倍にする</button>
        </p>
        <p>計算結果: {isNumInp && calcResult || "半角数字以外が入力されました"}</p>
      </header>
    </div>
  );
}

export default App;