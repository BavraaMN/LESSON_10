console.log('Все список '+listIPv4.length+' штука');

const notrepeatedlist=listIPv4.filter((item, 
      index) => listIPv4.indexOf(item) === index);
      console.log('Все список уникальных адресов используя array filter '+notrepeatedlist.length+' штук');

   console.log('Все список уникальных адресов используя set '+new Set(listIPv4).size+' штук');