export default function colorChange(status) {
  switch (status) {
  case 'Pendente':
    return 'rgba(204, 184, 0, 0.75';
  case 'Entregue':
    return ('rgba(0, 204, 155, 0.75');
  case 'Preparando':
    return 'rgba(102, 204, 0, 0.75)';
  case 'Em Trânsito':
    return 'rgba(102, 204, 0, 0.75)';
  default:
    break;
  }
}
