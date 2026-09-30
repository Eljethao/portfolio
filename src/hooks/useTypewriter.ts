import { useEffect, useState } from 'react'

export function useTypewriter(words: readonly string[], typeMs = 70, holdMs = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? typeMs / 2 : typeMs
    if (!deleting && text === word) delay = holdMs

    const id = window.setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((i) => i + 1)
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => window.clearTimeout(id)
  }, [text, deleting, index, words, typeMs, holdMs])

  return text
}
