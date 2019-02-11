module.exports = distance

function distance (a, b) {
  var dL = a[0] - b[0]
  var dA = a[1] - b[1]
  var dB = a[2] - b[2]
  var c1 = Math.sqrt(a[1] * a[1] + a[2] * a[2])
  var c2 = Math.sqrt(b[1] * b[1] + b[2] * b[2])
  var dC = c1 - c2
  var dH = dA * dA + dB * dB - dC * dC
  dH = dH < 0 ? 0 : Math.sqrt(dH)
  var sc = 1.0 + 0.045 * c1
  var sh = 1.0 + 0.015 * c1
  var dLKlsl = dL / (1.0)
  var dCkcsc = dC / (sc)
  var dHkhsh = dH / (sh)
  var i = dLKlsl * dLKlsl + dCkcsc * dCkcsc + dHkhsh * dHkhsh
  return i < 0 ? 0 : Math.sqrt(i)
}
