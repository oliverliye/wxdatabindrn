wxdbrn = require '../index'

# css databind
test 'width:{{width}}', ()->
    expect(wxdbrn('width:{{width}}')).toBe "{'width:'+(width)+''}"

test '{{width}}:{{value}}', ()->
    expect(wxdbrn('{{width}}:{{value}}')).toBe "{''+(width)+':'+(value)+''}"

# attr databind
test '{{true}}', ()->
    expect(wxdbrn('{{true}}')).toBe "{true}"

test 'This is a {{text}}', ()->
    expect(wxdbrn('This is a {{text}}')).toBe "{'This is a '+(text)+''}"