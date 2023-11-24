import './App.css';

import AutoComplete from './AutoComplete.js';
import Calculator from './Calculator';

// import Video from './Video';

// const videoInfo = [
//   {
//     videoID: 'bCtlituS9p8?',
//     controls: '',
//     autoplay: '0',
//     color: 'red',
//     loop: '1',
//     start: '30',
//     end: '35',
//     thumbnail: '',
//   },
//   {
//     videoID: 'a8mgLuqUae4?',
//     controls: '1',
//     autoplay: '0',
//     color: 'white',
//     loop: '1',
//     start: '',
//     end: '',
//     thumbnail: '',
//   },
//   {
//     videoID: '',
//     controls: '0',
//     autoplay: '0',
//     color: 'white',
//     loop: '1',
//     start: '',
//     end: '',
//     thumbnail: 'https://picsum.photos/400/300',
//   },
// ];

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <h1>Calculator</h1>
      <Calculator></Calculator>
      <h1>To Do List</h1> <p>(with autocomplete)</p>
      <AutoComplete></AutoComplete>
      {/* {videoInfo.map((el) => (
        <Video
          key={el.videoID}
          videoID={el.videoID}
          controls={el.controls}
          autoplay={el.autoplay}
          color={el.color}
          loop={el.loop}
          start={el.start}
          end={el.end}
          thumbnail={el.thumbnail}
        ></Video>
      ))} */}
    </>
  );
  //<Video videoID={'bCtlituS9p8?'} controls="1" autoplay="1" color="red" loop="1" start="15" end="20"></Video>;
};

export default App;
