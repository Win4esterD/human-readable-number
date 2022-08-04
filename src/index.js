module.exports = function toReadable (number) {
    nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      }
    
      tens = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      }
    
      hundreds = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
      }
      
      if (number < 20) {
        return nums[number];
      } else if (Object.keys(tens).includes(String(number))){
        return tens[number];
      } else if (Object.keys(hundreds).includes(String(number))){
        return hundreds[number];
      }else if (String(number).length == 2){
        ten = String(number)[0] + '0';
        num = String(number)[1];
        return `${tens[ten]} ${nums[num]}`;
      }else if (Object.keys(hundreds).includes(String(number)[0] + '00') &&
       Object.keys(tens).includes(String(number).slice(1))){
        hundred = String(number)[0] + '00';
        ten = String(number).slice(1);
        return `${hundreds[hundred]} ${tens[ten]}`
      }else if (number > 99 && Object.keys(hundreds).includes(String(number)[0] + '00') &&
      +String(number).slice(1) < 20)
      {
        hundred = String(number)[0] + '00';
        num = String(number).slice(1);
        num = +num;
        return `${hundreds[hundred]} ${nums[String(num)]}`;
      }else if (String(number).length == 3 && +String(number)[1] > 1 && +String(number)[2] > 0){
        hundred = String(number)[0] + '00';
        ten = String(number)[1] + '0';
        num = String(number)[2];
    
        return `${hundreds[hundred]} ${tens[ten]} ${nums[num]}`;
      }
}
