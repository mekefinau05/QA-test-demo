 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }


  test('should run', () => {
    //assertion
    expect(2).toBe(2)
  })

  test('first name should be Patten', () => {
    expect(testData.firstName).toBe('Patten')
  })

  describe('formatTitle test', () => {
    test('formatTitle should return a string', () => {
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
    })

    it('should format title correctly', () => {
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')
    })
  })

  describe('shortenBio test', () => {
    let shortBio = shortenBio(testData.bio)
    test('should shorten the bio string', () => {
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    })
    it('should add periods to the end of the string', () => {
      expect(shortBio).toContain('...')
    })
  })


  describe('convertLength tests', () => {
    let result = convertLength(testData.length)
    it('should return an aray with 2', () => {
      expect(result).toHaveLength(2)
    })

    test('can handle numbers under 60', () => {
      let result = convertLength(30)
      expect(result[1]).toEqual(30)
    })
  })