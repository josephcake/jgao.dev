const handleScroll = (e, sScrollTop) => {
  // console.log(e.target.scrollTop)
  sScrollTop(e.target.scrollTop);

  // let scrollTop = e.target.scrollTop
  // let sectionHeight = e.target.scrollHeight/4
  // let prevState = {...inView};
  // if(scrollTop !== inView.top){
  //   prevState.project = scrollTop/sectionHeight
  //   prevState.top = scrollTop
  // }

  // sInView(prevState)    setting the current project view (if snap scroll is on)
};


  const debounce = (fn, delay) => {
    let timeoutID;
    return function (...args) {
      if(timeoutID){
        clearTimeout(timeoutID)
      }
      timeoutID = setTimeout(()=>{
        fn(...args)
      }, delay)
    }
  } //debounce(fn,s)

export {handleScroll, debounce}
