import diet from 'public/images/services/diet.jpg';
import cupping from 'public/images/services/cupping.jpg';
import moxibustion from 'public/images/services/moxibustion.jpg';
import acupuncture from 'public/images/services/acupuncture.jpg';

export const servicesInfo = [
  {
    title: 'Διατροφή',
    description: 'Συνταγογράφηση σύμφωνα με την κινέζικη ιατρική ως θεραπεία ή για απώλεια βάρους',
    image: diet,
    serviceId: 'diet'
  },
  {
    title: 'Cupping',
    description:
      'Μάλαξη με βεντούζες βεντουζοθεραπεία για χαλάρωση, αποκατάσταση τραυματισμών , fascia release (περιτονιακή απελευθέρωση) και λεμφική αποσυμφόρηση.',
    image: cupping,
    serviceId: 'cupping'
  },
  {
    title: 'Moxibustion',
    description:
      'Θερμοθεραπεία με μόξα, θεραπεία σημείων για πόνους και ευεξία με θερμότητα από το φυτό Artemisia Vulgaris (αρτεμισια)',
    image: moxibustion,
    serviceId: 'moxibustion'
  },
  {
    title: 'Βελονισμός',
    description:
      'Θεραπεία σε ειδικά βελονιστικά σημεία με εισαγωγή λεπτών βελονών (μιας χρήσης) για ευεξία, χαλάρωση και εξισορρόπηση εσωτερικών και εξωτερικών λειτουργιών του  οργανισμού',
    image: acupuncture,
    serviceId: 'acupuncture'
  }
];
