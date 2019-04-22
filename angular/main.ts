var lemmesee = function() {
  if (confirm('get over here!'))
  {
    if (confirm('let me show you my little friend!'))
    {
      alert('you died!')
    } else {
      if (confirm('run away?'))
      {
        alert('you survived!')

      } else {
        if (confirm('attack?'))
        {
          alert('you died!')
        } else {
          alert('you have done nothing')
          alert('you died!')
        }
      }
    }
  } else {
    if confirm('run away?')
    {
      alert('you survived!')
    } else {
      alert('you died!')
    }
  }
}
lemmesee()