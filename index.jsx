
import * as React from "react";
import HomeIcon from '~icons/mdi/home';

function Test() {
  return React.createElement('div', {}, 'test')
}

export default function App() {
  return <div><Test /><HomeIcon /></div>
}