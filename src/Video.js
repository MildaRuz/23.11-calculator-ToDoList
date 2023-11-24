const Video = ({ videoID, controls, autoplay, color, start, loop, end, thumbnail }) => {
  return thumbnail ? (
    <img src={thumbnail} alt="nothing" />
  ) : (
    <>
      <div className="container">
        {videoID ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoID}&controls=${
              controls ? controls : 1
            }&autoplay=${autoplay}&color=${color}&start${start}&loop=${loop}&end=${end}`}
            title="YouTube video player"
            //frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            //allowfullscreen
          ></iframe>
        ) : (
          <img src={thumbnail} alt="nothing" />
        )}
      </div>
    </>
  );
};
export default Video;
