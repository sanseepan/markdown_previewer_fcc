import React,{Component} from 'react';
import marked from 'marked';

const initialState = `

![image](https://cdn.wccftech.com/wp-content/uploads/2016/05/42f584ce79976c2a1990099bd5cf16a7a4047ce1_main_hero_image.jpg)
# Markdown previewer website   
***
[Home]()  |  [Code free](https://www.freecodecamp.org/) | [Editor](https://repl.it)
***

> "Just make it your code easier with freecodecamp"


## Freecodecamp courses list
### Responsive web design

- html
- css
- javascript


### Front-end libraries
1. bootstrap
2. sass
3. react
4. redux

### who love coding ?

\`alert('hi champs')\`

\`\`\`
myFunction = () =>{
  console.log('hello world') }
\`\`\`



*here you can find free tutorials* [click here](https://www.freecodecamp.org)
***
this website created by **sanjeev**  | *contact me*:<sanjeev.develop@gmail.com>

`

var renderer = new marked.Renderer();
renderer.link = (href,title,text) =>{
return `<a href =${href} target ="_blanck">${text}</a>`
}

marked.setOptions({
  renderer:renderer,
  breaks:true
})

class Container extends Component {
  constructor(){
    super()

    this.state ={
      markdown:initialState
    }
  }

  handleChange = (event) =>{
    this.setState({markdown: event.target.value})

  }
  render(){
    return(
      <div className ="container">
      <textarea className ="editor" value ={this.state.markdown} onChange ={this.handleChange} id="editor"/>
      <div className="previewer">
      <div className ="preview-child" 
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
         id="preview" />   
      </div>  
      </div>
    )
  }
}

export default Container;