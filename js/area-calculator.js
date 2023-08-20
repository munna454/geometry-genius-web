function calculateTriangleArea (){
    // get triangle base value.
  const baseValue = document.getElementById('triangle-base')
  const baseValueText = baseValue.value
  const base = parseFloat(baseValueText)
  console.log(base)  

    //   get triangle hight value.
 const hightValue = document.getElementById('triangle-hight')
 const hightValueText = hightValue.value
 const hight = parseFloat(hightValueText)
 console.log(hight)

 const area = 0.5 * base * hight
  console.log(area)

    //   show triangle area
  const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area  

  baseValue.value = ''
  hightValue.value = ''
}

function calculateRectangleArea (){

    // get rectangle width
 const widthField = document.getElementById('rectangle-width');
 const widthValueText = widthField.value;
 const width = parseFloat(widthValueText)
 console.log(width)
    
      //  get rectangle length
  const lengthField = document.getElementById('rectangle-length') ;
  const lengthValueText = lengthField.value
  const length = parseFloat(lengthValueText)
  console.log(length)
  
    // calculate area
  const area = width * length
  
    // show rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area  
    
    widthField.value = '';
    lengthField.value = '';
}

      // reuseable function -----> reduce duplicate code.
  function calculateParallelogramArea (){
      const base = inputValue('parallelogram-base');
      console.log(base)

      const hight = inputValue ('parallelogram-hight');
      console.log(hight)

      // calculate parallelogram 
     const area = base * hight

      setElementText('parallelogram-area', area)     
  } 
  
    function calculateEllipseArea (){
      const majorRadius = inputValue('ellipse-major-redius')
      const minorRadius = inputValue('ellipse-minor-redius')
      const area = 3.14 * majorRadius * minorRadius
      setElementText('ellipse-area', area)
    }
  
    // reuseable get input value field in number
   function inputValue (inputId){
  const inputValue = document.getElementById(inputId)
  const inputValueText = inputValue.value;
  const value = parseFloat(inputValueText)
    return value

   } 

        // reuseable set span, p, div, etc text.
     function setElementText (elementId, area){
     const element = document.getElementById(elementId)
     element.innerText = area
     }   
    