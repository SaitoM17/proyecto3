const obj = {
    Free: 'Solo puedes tomar los cursos gratis de Platzi',
    Basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertDuo: 'Tú y otra persona pueden tomar casi todos los cursos de Platzi durante un año',
}

function tipoSuscripcion(suscripcion){
    // const arr = Object.values(obj);
    // console.log(arr);
    if(obj[suscripcion]){
        console.log(obj[suscripcion]);
        return;
    }
    console.warn("Esa suscripción no existe");
    // console.log(obj[suscripcion]);
}

tipoSuscripcion('ExpertDuo');