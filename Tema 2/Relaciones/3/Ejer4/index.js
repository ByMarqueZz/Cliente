function separarCons(cad_arg) {
    for (i=0; i < cad_arg.length; i++) {
        let consonantes = "";
        if (cad_arg[i] != a || cad_arg[i] != e || cad_arg[i] != i || cad_arg[i] != o || cad_arg[i] != u) {
            consonantes += cad_arg[i];
        }
        document.write(cad_arg[i]);
    }
}

document.write(separarCons("Maria del carmen"));