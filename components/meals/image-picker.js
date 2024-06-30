'use client' // because of event-handler

import { useRef, useState } from 'react'
import Image from 'next/image'

import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInput = useRef()

  function handlePickClick() {
    imageInput.current.click()
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file) // result is void
  }

  // Alternative, more JavaScriptish way:
  // function handleImageChange() {
  //   const file = imageInput.current.files[0]
  //   if (file) {
  //     setPickedImage(file)
  //   }
  // }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt='The image selected by the user.' fill />}
          {/* // connected to the above alternative, more JavaScriptish way:
          {pickedImage && (
            <Image src={pickedImage && URL.createObjectURL(pickedImage)} alt='The image selected by the user.' fill />
          )} */}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.nutton} type='button' onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}
