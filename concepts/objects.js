const tsuru={
    model: 2000,
    color: 'verde',
    kilometer: 200000,
    engine: '2.0 litros',
}
console.log(tsuru);
console.log(tsuru.color);
console.log(tsuru.model);
tsuru.engine="4.0 litros"
console.log(tsuru);
tsuru.collitions=5;
console.log(tsuru);
tsuru ['numero placas'] ='XDDDDDD6'
console.log(tsuru);
tsuru.services = [2005,2010,2015,2020];
console.log(tsuru['services']);

tsuru.start=function(){
    console.log('Revisión de sistema');
    console.log('Revisando niveles');
    console.log('estoy prendido we!');
    console.log('estoy prendido we!');
    console.log('estoy prendido we!');

    this.status='Encendido';


}
tsuru.start();
console.log(tsuru.status);

tsuru['turn off']= function(){
    console.log('Apagando sistema');
    console.log('Apagando sistema');
    console.log('Apagando sistema');
    this.status='Apagado';
    console.log(this.status);
}
tsuru['turn off']();

delete tsuru['numero placas'];
console.log(tsuru);