import readImageFile from 'itk/readImageFile'
import readImageDICOMFileSeries from 'itk/readImageDICOMFileSeries'
import curry from 'curry'

const outputFileInformation = curry(function outputFileInformation (event) {
  
  console.log('Inside the file loader function')

  const dataTransfer = event.dataTransfer

  const files = event.target.files || dataTransfer.files
  
  console.log('after checking data files')
  function printImage(image) {
    console.log('Inside')
      function replacer (key, value) {
        if (!!value && value.byteLength !== undefined) {
          return String(value.slice(0, 6)) + '...'
        }
        return value
      }
      console.log(JSON.stringify(image, replacer, 4))
  }
  
  if (files.length === 1) {
    console.log('One file has been chosen')
    return readImageFile(null, files[0])
      .then(function ({ image, webWorker }) {
        console.log('Reading the actual file')
        webWorker.terminate()
        printImage(image)
      })
  } else {
    console.log('Many files have been chosen')
    return readImageDICOMFileSeries(null, files)
      .then(function ({ image, webWorker }) {
        webWorker.terminate()
        printImage(image)
      })
  }
})

export { outputFileInformation }