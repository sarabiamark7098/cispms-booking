<script setup>
const items = [
  {
    name: 'Medical Assistance for Hospital Bill',
    image: '../src/components/icons/HospitalBill.png',
    desc: [
      'Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician (1 original and 1 photocopy)',
      'Hospital bill (with name and signature) (1 original and 1 photocopy)',
      'Barangay certificate / certificate of Indigency (1 original and 1 photocopy)',
      'Any valid Government Issued I.D. (2 photocopies)',
      'Social Case Study Report',
    ],
  },
  {
    name: 'Medical Assistance for Medicine / Assistive Device',
    image: '../src/components/icons/Medicine.png',
    desc: [
      'Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician (1 original and 1 photocopy)',
      'Prescription complete with name, license number, and signature of the Physician (2 photocopies)',
      'Barangay certificate / certificate of Indigency (1 original and 1 photocopy)',
      'Any valid Government Issued I.D. (2 photocopies)',
      'Social Case Study Report',
    ],
  },
  {
    name: 'Medical Assistance for Laboratory Requests',
    image: '../src/components/icons/Laboratory.png',
    desc: [
      'Medical Certificate/Clinical Abstract complete with name, license number, and signature of the Physician (1 original and 1 photocopy)',
      'Laboratory Requests with name, license number, and signature of the Physician (1 original and 1 photocopy)',
      'Laboratory Quotation (1 original and 1 photocopy)',
      'Barangay certificate / certificate of Indigency (1 original and 1 photocopy)',
      'Any valid Government Issued I.D. (2 photocopies)',
      'Social Case Study Report',
    ],
  },
  {
    name: 'Burial Assistance or Transfer of Cadaver',
    image: '../src/components/icons/Funeral.png',
    desc: [
      'Registered Death Certificate / Certification from the tribal chieftain (1 Certified true copy and 1 photocopy)',
      'Funeral Contract (1 certified true copy and 1 photocopy)',
      'Transfer Permit (1 certified true copy and 1 photocopy)',
      'Barangay certificate / certificate of Indigency (1 original and 1 photocopy)',
      'Any valid Government Issued I.D. (2 photocopies)',
    ],
  },
  {
    name: 'Educational Assistance',
    image: '../src/components/icons/Educational.png',
    desc: [
      'Enrollment Assessment Form or Certificate of Enrollment or Registration (1 original and 1 photocopy)',
      'Validated School ID / Valid I.D of the Parent/Guardian (2 photocopies)',
      'Statement of Account for college students (1 original and 1 photocopy)',
    ],
  },
  {
    name: 'Food Assistance',
    image: '../src/components/icons/Food.png',
    desc: [
      'Any valid Government Issued I.D. (2 photocopies)',
      'Project Proposal and Food Distribution List (CRCF client) (2 Original)',
      'Barangay certificate / certificate of Residency (1 original and 1 photocopy)',
    ],
  },
  {
    name: 'Cash Assistance for Other Support Services',
    image: '../src/components/icons/Cash.png',
    desc: [
      'Any valid Government Issued I.D. (2 photocopies)',
      'Depending on the circumstances:',
      'Police Report / Fire incident report from the Bureau of Fire (1 Original and 1 photocopy)',
      'Passport / Travel Document, certification from OWWA (1 original and 1 photocopy)',
      'Certification from Casework from rescued clients (1 original and 1 photocopy)',
      'Blotter and social worker’s certification for the victims of online sexual exploitation of children (1 original and 1 photocopy)',
    ],
  },
]
</script>

<template>
  <div className="carousel carousel-container relative overflow-hidden">
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 360}px)` }"
    >
      <div v-for="item in items" :key="item.name">
        <div className="carousel-item">
          <div
            class="bg-white w-[345px] h-[650px] rounded-xl aspect-square px-12 py-5 mx-5 flex flex-col items-center"
          >
            <div class="h-[70px]">
              <p class="font-bold text-lg mb-5 text-center">{{ item.name }}</p>
            </div>
            <img :src="item.image" :alt="item.name" class="max-h-[120px] mb-7" />
            <div>
              <ul class="list-disc space-y-1">
                <li v-for="description in item.desc" class="">
                  {{ description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel-container {
  width: 100%;
  margin: 0 auto;
}

.carousel-item {
  flex-basis: 345px;
}
</style>
