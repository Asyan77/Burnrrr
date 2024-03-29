export const restoreSession = async () => {
  // console.log('wookring??')
    try {
      const res = await fetch('/api/session')
      const token = res.headers.get('X-CSRF-Token')
      if (res.ok) {
        const data = await res.json()
        console.log('data', data)
        sessionStorage.setItem('currentUser', JSON.stringify(data.user))
        sessionStorage.setItem('csrfToken', token)
      } else {
        throw res
      }
    } catch {
      console.error('restoreSession is broken')
    }
  }
  

  // this s a helper method to DRY up code for headers 
  export const csrfFetch = async (url, options = {}) => {
    options.method ||= 'GET'
    options.headers ||= {}
  
    if (options.method.toUpperCase() !== 'GET') {
      // have to skip setting 'Content-Type' header if using formData
      options.headers['Content-Type'] = 'application/json'
      options.headers['X-CSRF-Token'] = sessionStorage.getItem('csrfToken')
    }
  
    const res = await fetch(url, options)
    return res
  }