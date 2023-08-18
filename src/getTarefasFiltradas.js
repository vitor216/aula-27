import { estado, getTarefasPendentes, getTarefasFinalizadas } from './App.vue';

export function getTarefasFiltradas() {
const { filtro } = estado;

switch (filtro) {
case 'pendentes':
return getTarefasPendentes();
case 'finalizadas':
return getTarefasFinalizadas();
default:
return estado.tarefas;
}
}
