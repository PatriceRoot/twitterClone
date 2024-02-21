import Header from './components/header.jsx';
import TweetEditor from './components/tweet-editor.jsx';
import './App.css'

export default function Timeline(){
  return (
    <div className='timeline'>
      <Header/>
      <TweetEditor/>
    </div>
  )
}
