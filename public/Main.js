import Body from './components';
function Main(){
  return (
    <div>
      <div><Header title="Header's Rule"/>Hello</div>

      <div className="flex-grid"><Profile/><Body /> <Other /></div>
    </div>
  )
}