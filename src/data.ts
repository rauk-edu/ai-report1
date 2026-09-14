import { SectionData, SchoolMetadata } from './types';

export const INITIAL_SCHOOL_METADATA: SchoolMetadata = {
  "schoolName": "សាលាបឋមសិក្សា រោគ",
  "cluster": "ស្ពានស្រែង",
  "district": "ស្រុកភ្នំស្រុក",
  "province": "ខេត្តបន្ទាយមានជ័យ",
  "academicYear": "២០២៥_២០២៦",
  "principalName": "សុខ សារើន",
  "principalRole": "ប្រធានអង្គភាព",
  "secretaryName": "អ៊ុន ប៊ុនទុង",
  "reportDate": "ថ្ងៃទី១៤ ខែកញ្ញា ឆ្នាំ២០២៦",
  "lunarDate": "ថ្ងៃចន្ទ ៣កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០",
  "solarDate": "រោគ  ថ្ងៃទី១៤ ខែកញ្ញា ឆ្នាំ២០២៦",
  "preparedBy": "អ៊ុន ប៊ុនទុង",
  "preparerTitle": "អ្នកធ្វើតារាង",
  "preparerLunarDate": "ថ្ងៃអាទិត្យ ២កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០",
  "preparerSolarDate": "រោគ  ថ្ងៃទី១៣ ខែកញ្ញា ឆ្នាំ២០២៦",
  "approvalTitle": "បានឃើញ និង ឯកភាព",
  "approvalLunarDate": "ថ្ងៃចន្ទ ៣កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០",
  "approvalSolarDate": "រោគ  ថ្ងៃទី១៤ ខែកញ្ញា ឆ្នាំ២០២៦"
};

export const INITIAL_SECTIONS: SectionData[] = [
  {
    "id": "sec_b_1",
    "part": "B",
    "sectionNumber": "៥",
    "title": "៥.ស្ថិតិមន្រ្តីបម្រើការ",
    "englishTitle": "Staff & Teaching Personnel (Part 1)",
    "category": "បុគ្គលិកអប់រំ",
    "englishCategory": "Staff & Teachers",
    "iconName": "Users",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះ</p>\n\n\t\t\t<p style=\"text-align: center;\">សាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"16\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់សាលារៀន</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សរុបរួម</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"14\">\n\t\t\t<p style=\"text-align: center;\">បុគ្គលិកទីចាត់ការ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">នាយក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">នាយករង</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មិនបង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុបរួម</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មិនបង្រៀន</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1=3+23</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2=4+24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3=5+11+17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4=6+12+18</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5=7+9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6=8+10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">8</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">11=13+15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12=14+16</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">13</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">14</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">16</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">13</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_1_r0",
        "cells": [
          {
            "id": "b_1_r0_c0",
            "text": "ឈ្មោះ\n\n\t\t\t សាលា",
            "rowSpan": 6,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r0_c1",
            "text": "ថ្នាក់សាលារៀន",
            "rowSpan": 1,
            "colSpan": 16,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r1",
        "cells": [
          {
            "id": "b_1_r1_c0",
            "text": "សរុបរួម",
            "rowSpan": 4,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r1_c1",
            "text": "ស្រី",
            "rowSpan": 4,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r1_c2",
            "text": "បុគ្គលិកទីចាត់ការ",
            "rowSpan": 1,
            "colSpan": 14,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r2",
        "cells": [
          {
            "id": "b_1_r2_c0",
            "text": "សរុប",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r2_c1",
            "text": "ស្រី",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r2_c2",
            "text": "នាយក",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r2_c3",
            "text": "នាយករង",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r3",
        "cells": [
          {
            "id": "b_1_r3_c0",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c1",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c2",
            "text": "បង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c3",
            "text": "មិនបង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c4",
            "text": "សរុបរួម",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c5",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c6",
            "text": "បង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r3_c7",
            "text": "មិនបង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r4",
        "cells": [
          {
            "id": "b_1_r4_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c3",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c5",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r4_c7",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r5",
        "cells": [
          {
            "id": "b_1_r5_c0",
            "text": "1=3+23",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c1",
            "text": "2=4+24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c2",
            "text": "3=5+11+17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c3",
            "text": "4=6+12+18",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c4",
            "text": "5=7+9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c5",
            "text": "6=8+10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c6",
            "text": "7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c7",
            "text": "8",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c8",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c9",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c10",
            "text": "11=13+15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c11",
            "text": "12=14+16",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c12",
            "text": "13",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c13",
            "text": "14",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c14",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_1_r5_c15",
            "text": "16",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_1_r6",
        "cells": [
          {
            "id": "b_1_r6_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c1",
            "text": "13",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c2",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c3",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c4",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c5",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c6",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c7",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c8",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c9",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c10",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c11",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c12",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c13",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c14",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c15",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_1_r6_c16",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ស្ថិតិមន្រ្តីបម្រើការ បុគ្គលិកទីចាត់ការ នាយក និងនាយករង"
  },
  {
    "id": "sec_b_2",
    "part": "B",
    "sectionNumber": "៥(ត)",
    "title": "៥.ស្ថិតិមន្រ្តីបម្រើការ(ត)",
    "englishTitle": "Staff & Teaching Personnel (Part 2 - Continued)",
    "category": "បុគ្គលិកអប់រំ",
    "englishCategory": "Staff & Teachers",
    "iconName": "UserCheck",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះ</p>\n\n\t\t\t<p style=\"text-align: center;\">សាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"20\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់សាលារៀន</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">បុគ្គលិកទីចាត់ការ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"14\">\n\t\t\t<p style=\"text-align: center;\">សិក្ខាបនធារី(គ្រូឈេថ្នាក់)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">មន្រ្តីទីចាត់ការ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">គ្រូក្របខ័ណ្ឌ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">គ្រូក្រៅក្របខ័ណ្ឌ(ជាប់កិច្ចសន្យា)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មិនបង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន1ពេល1ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន 2ពេល2ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន1ពេល1ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បង្រៀន 2ពេល2ថ្នាក់</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17=19+21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">18=20+22</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">19</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">20</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">22</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">23=25+31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24=26+32</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">25=27+29</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">26=28+30</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">27</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">28</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">29</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">30</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31=33+35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">32=34+36</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">33</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">34</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">36</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_2_r0",
        "cells": [
          {
            "id": "b_2_r0_c0",
            "text": "ឈ្មោះ\n\n\t\t\t សាលា",
            "rowSpan": 6,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r0_c1",
            "text": "ថ្នាក់សាលារៀន",
            "rowSpan": 1,
            "colSpan": 20,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r1",
        "cells": [
          {
            "id": "b_2_r1_c0",
            "text": "បុគ្គលិកទីចាត់ការ",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r1_c1",
            "text": "សិក្ខាបនធារី(គ្រូឈេថ្នាក់)",
            "rowSpan": 1,
            "colSpan": 14,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r2",
        "cells": [
          {
            "id": "b_2_r2_c0",
            "text": "មន្រ្តីទីចាត់ការ",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r2_c1",
            "text": "សរុប",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r2_c2",
            "text": "ស្រី",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r2_c3",
            "text": "គ្រូក្របខ័ណ្ឌ",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r2_c4",
            "text": "គ្រូក្រៅក្របខ័ណ្ឌ(ជាប់កិច្ចសន្យា)",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r3",
        "cells": [
          {
            "id": "b_2_r3_c0",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c1",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c2",
            "text": "បង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c3",
            "text": "មិនបង្រៀន",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c4",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c5",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c6",
            "text": "បង្រៀន1ពេល1ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c7",
            "text": "បង្រៀន 2ពេល2ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c8",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c9",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c10",
            "text": "បង្រៀន1ពេល1ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r3_c11",
            "text": "បង្រៀន 2ពេល2ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r4",
        "cells": [
          {
            "id": "b_2_r4_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c3",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c5",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c7",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c8",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c9",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c10",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r4_c11",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r5",
        "cells": [
          {
            "id": "b_2_r5_c0",
            "text": "17=19+21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c1",
            "text": "18=20+22",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c2",
            "text": "19",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c3",
            "text": "20",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c4",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c5",
            "text": "22",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c6",
            "text": "23=25+31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c7",
            "text": "24=26+32",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c8",
            "text": "25=27+29",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c9",
            "text": "26=28+30",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c10",
            "text": "27",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c11",
            "text": "28",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c12",
            "text": "29",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c13",
            "text": "30",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c14",
            "text": "31=33+35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c15",
            "text": "32=34+36",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c16",
            "text": "33",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c17",
            "text": "34",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c18",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_2_r5_c19",
            "text": "36",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_2_r6",
        "cells": [
          {
            "id": "b_2_r6_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c1",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c2",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c3",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c4",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c5",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c7",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c8",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c9",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c10",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c11",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c12",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c13",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c14",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c15",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c16",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c17",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c18",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c19",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_2_r6_c20",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ស្ថិតិគ្រូកិច្ចសន្យា និងមន្ត្រីទីចាត់ការតាមជំនាញ"
  },
  {
    "id": "sec_b_3",
    "part": "B",
    "sectionNumber": "៦",
    "title": "៦.ស្ថិតិ សកម្មភាពបណ្ណាល័យ",
    "englishTitle": "School Library Activities & Materials",
    "category": "បណ្ណាល័យ",
    "englishCategory": "Library",
    "iconName": "BookOpen",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះ</p>\n\n\t\t\t<p style=\"text-align: center;\">សាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនសិស្ស</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"5\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណាល័យ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណារក្ស</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សម្ភារៈ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"5\" rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះអង្គការដែលឧបត្ថម្ភបណ្ណាល័យ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បណ្ណាល័យសរុប</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណាល័យដាច់ដោយឡែក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណាល័យក្នុងទីចាត់ការ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណារក្សបានបណ្ដុះបណ្ដាល</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បណ្ណារក្សមិនបានបណ្ដុះបណ្ដាល</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សៀវភៅក្នុងបណ្ណាល័យ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ធ្នើរមុខ១</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ធ្នើរមុខ២</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">{1}</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ម្ចាស់ការ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ឧបត្ថម្ភ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ម្ចាស់ការ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ឧបត្ថម្ភ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">2,136</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"5\">\n\t\t\t<p style=\"text-align: center;\">អង្គការទស្សនៈពិភពលោក</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_3_r0",
        "cells": [
          {
            "id": "b_3_r0_c0",
            "text": "ឈ្មោះ\n\n\t\t\t សាលា",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r0_c1",
            "text": "ចំនួនសិស្ស",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r0_c2",
            "text": "បណ្ណាល័យ",
            "rowSpan": 1,
            "colSpan": 5,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r0_c3",
            "text": "បណ្ណារក្ស",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r0_c4",
            "text": "សម្ភារៈ",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r0_c5",
            "text": "ឈ្មោះអង្គការដែលឧបត្ថម្ភបណ្ណាល័យ",
            "rowSpan": 3,
            "colSpan": 5,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_3_r1",
        "cells": [
          {
            "id": "b_3_r1_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c2",
            "text": "បណ្ណាល័យសរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c3",
            "text": "បណ្ណាល័យដាច់ដោយឡែក",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c4",
            "text": "បណ្ណាល័យក្នុងទីចាត់ការ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c5",
            "text": "បណ្ណារក្សបានបណ្ដុះបណ្ដាល",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c6",
            "text": "បណ្ណារក្សមិនបានបណ្ដុះបណ្ដាល",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c7",
            "text": "សៀវភៅក្នុងបណ្ណាល័យ",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c8",
            "text": "ធ្នើរមុខ១",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_3_r1_c9",
            "text": "ធ្នើរមុខ២",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_3_r2",
        "cells": [
          {
            "id": "b_3_r2_c0",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c2",
            "text": "{1}",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c3",
            "text": "ម្ចាស់ការ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c4",
            "text": "ឧបត្ថម្ភ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c5",
            "text": "ម្ចាស់ការ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c6",
            "text": "ឧបត្ថម្ភ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c7",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c8",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c9",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r2_c10",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_3_r3",
        "cells": [
          {
            "id": "b_3_r3_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c1",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c2",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c3",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c4",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c5",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c7",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c8",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c9",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c10",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c11",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c12",
            "text": "2,136",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c13",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c14",
            "text": "6",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_3_r3_c15",
            "text": "អង្គការទស្សនៈពិភពលោក",
            "rowSpan": 1,
            "colSpan": 5,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ទិន្នន័យអំណាន សម្ភារៈឧបទេស និងអង្គការឧបត្ថម្ភបណ្ណាល័យ"
  },
  {
    "id": "sec_b_4",
    "part": "B",
    "sectionNumber": "៦(ត)",
    "title": "៦.ស្ថិតិ សកម្មភាពបណ្ណាល័យ(ត)",
    "englishTitle": "Library Facility Standards & Librarians",
    "category": "បណ្ណាល័យ",
    "englishCategory": "Library",
    "iconName": "Library",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះ</p>\n\n\t\t\t<p style=\"text-align: center;\">សាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">គ្មានបណ្ណាល័យ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនបណ្ណាល័យ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"5\">\n\t\t\t<p style=\"text-align: center;\">ប្រភេទបណ្ណល័យ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"5\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនបណ្ណារក្ស</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">មានបន្ទប់ធ្វើប/ណ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រប់ស្តង់ដារ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មិនស្របស្ដង់ដារ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">អាគារ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បន្ទប់</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ក្នុងទីចាត់ការ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បើកទ្វារ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បានបំប៉ន</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មិនបានបំប៉ន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ធ្វើការ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">១ពេល</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">២ពេល</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">១ពេល</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">២ពេល</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_4_r0",
        "cells": [
          {
            "id": "b_4_r0_c0",
            "text": "ឈ្មោះ\n\n\t\t\t សាលា",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r0_c1",
            "text": "គ្មានបណ្ណាល័យ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r0_c2",
            "text": "ចំនួនបណ្ណាល័យ",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r0_c3",
            "text": "ប្រភេទបណ្ណល័យ",
            "rowSpan": 1,
            "colSpan": 5,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r0_c4",
            "text": "ចំនួនបណ្ណារក្ស",
            "rowSpan": 1,
            "colSpan": 5,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_4_r1",
        "cells": [
          {
            "id": "b_4_r1_c0",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c1",
            "text": "មានបន្ទប់ធ្វើប/ណ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c2",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c3",
            "text": "ស្រប់ស្តង់ដារ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c4",
            "text": "មិនស្របស្ដង់ដារ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c5",
            "text": "អាគារ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c6",
            "text": "បន្ទប់",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c7",
            "text": "ក្នុងទីចាត់ការ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c8",
            "text": "បើកទ្វារ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c9",
            "text": "សរុប",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c10",
            "text": "បានបំប៉ន",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c11",
            "text": "មិនបានបំប៉ន",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r1_c12",
            "text": "ធ្វើការ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_4_r2",
        "cells": [
          {
            "id": "b_4_r2_c1",
            "text": "១ពេល",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r2_c2",
            "text": "២ពេល",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r2_c3",
            "text": "១ពេល",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_4_r2_c4",
            "text": "២ពេល",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_4_r3",
        "cells": [
          {
            "id": "b_4_r3_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c1",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c2",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c3",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c4",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c5",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c7",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c8",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c9",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c10",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c11",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c12",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c13",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c14",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_4_r3_c15",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "កម្រិតស្តង់ដារបណ្ណាល័យ ស្ថានភាពបន្ទប់ និងបណ្ណារក្ស"
  },
  {
    "id": "sec_b_5",
    "part": "B",
    "sectionNumber": "៧",
    "title": "៧. ស្ថិតិ សាលាមានការប្រើប្រាស់ បង្គន់អនាម័យ និង ទឹកស្អាត",
    "englishTitle": "Sanitation, Toilets & Clean Water Access",
    "category": "ទឹកស្អាតនិងអនាម័យ",
    "englishCategory": "WASH / Sanitation",
    "iconName": "Droplets",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនបង្គន់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ស្រះទឹក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">អណ្ដូងលូ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">អណ្ដូងស្នប់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">អាងទឹក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ធុងចម្រោះ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សេវា</p>\n\n\t\t\t<p style=\"text-align: center;\">ទឹក</p>\n\n\t\t\t<p style=\"text-align: center;\">ស្អាត</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំ.ខ្នង</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំ.បង្គន់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បានប្រើ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_5_r0",
        "cells": [
          {
            "id": "b_5_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c1",
            "text": "ចំនួនបង្គន់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c2",
            "text": "ស្រះទឹក",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c3",
            "text": "អណ្ដូងលូ",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c4",
            "text": "អណ្ដូងស្នប់",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c5",
            "text": "អាងទឹក",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c6",
            "text": "ធុងចម្រោះ",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r0_c7",
            "text": "សេវា\n\n\t\t\t ទឹក\n\n\t\t\t ស្អាត",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_5_r1",
        "cells": [
          {
            "id": "b_5_r1_c0",
            "text": "ចំ.ខ្នង",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c1",
            "text": "ចំ.បង្គន់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c2",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c3",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c4",
            "text": "ចំនួន",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c5",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c7",
            "text": "ចំនួន",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c8",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c10",
            "text": "ចំនួន",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c11",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c13",
            "text": "ចំនួន",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c14",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c15",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c16",
            "text": "ចំនួន",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c17",
            "text": "បានប្រើ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_5_r1_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_5_r2",
        "cells": [
          {
            "id": "b_5_r2_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c1",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c2",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c3",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c4",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c5",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c7",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c8",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c9",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c10",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c11",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c12",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c13",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c14",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c15",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c16",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c17",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c18",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c19",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_5_r2_c20",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "បន្ទប់ទឹក បង្គន់អនាម័យ ស្រះទឹក អណ្ដូងលូ អណ្ដូងស្នប់ និងធុងចម្រោះ"
  },
  {
    "id": "sec_b_7",
    "part": "B",
    "sectionNumber": "៨",
    "title": "៨.ស្ថិតិ ការទម្លាក់ព្រូន និង មានហិបសង្រ្គោះ",
    "englishTitle": "Deworming & Health Kit Sources",
    "category": "សុខភាពសិក្សា",
    "englishCategory": "School Health",
    "iconName": "Cross",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">ការទម្លាក់ព្រូន ជុំទី១</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"6\">\n\t\t\t<p style=\"text-align: center;\">ការទម្លាក់ព្រូនជុំទី២</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ហិបសង្រ្គោះទទួល</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សិស្សសរុប</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ចំ.សិស្សបានទម្លាក់ព្រូន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សិស្សសរុប</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ចំ.សិស្សបានទម្លាក់ព្រូន</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ក្រសួង</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">មន្ទីរ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប្រភពផ្សេងៗ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_7_r0",
        "cells": [
          {
            "id": "b_7_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r0_c1",
            "text": "ការទម្លាក់ព្រូន ជុំទី១",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r0_c2",
            "text": "ការទម្លាក់ព្រូនជុំទី២",
            "rowSpan": 1,
            "colSpan": 6,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r0_c3",
            "text": "ហិបសង្រ្គោះទទួល",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_7_r1",
        "cells": [
          {
            "id": "b_7_r1_c0",
            "text": "សិស្សសរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c1",
            "text": "ចំ.សិស្សបានទម្លាក់ព្រូន",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c2",
            "text": "សិស្សសរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c3",
            "text": "ចំ.សិស្សបានទម្លាក់ព្រូន",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c4",
            "text": "ក្រសួង",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c5",
            "text": "មន្ទីរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_7_r1_c6",
            "text": "ប្រភពផ្សេងៗ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_7_r2",
        "cells": [
          {
            "id": "b_7_r2_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c3",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c4",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c5",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c7",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c8",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c10",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c11",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c12",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c13",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r2_c14",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_7_r3",
        "cells": [
          {
            "id": "b_7_r3_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c1",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c2",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c3",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c4",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c5",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c6",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c7",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c8",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c9",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c10",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c11",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c12",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c13",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c14",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c15",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_7_r3_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ប្រភពថ្នាំទម្លាក់ព្រូនពីក្រសួង មន្ទីរ និងប្រភពផ្សេងៗ"
  },
  {
    "id": "sec_b_8",
    "part": "B",
    "sectionNumber": "៩",
    "title": "៩. ស្ថិតិ សាលាបឋមសិក្សាមានសកម្មភាព កីឡា សិល្បៈ និង បំណិនជីវិត",
    "englishTitle": "Sports, Arts, and Life Skills Activities",
    "category": "កីឡានិងសិល្បៈ",
    "englishCategory": "Sports & Arts",
    "iconName": "Trophy",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានកីឡា</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនគ្រូកីឡា</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានសិល្បះ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនគ្រូសិល្បះ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានសិល្បះ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានរោងជាង</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួន</p>\n\n\t\t\t<p style=\"text-align: center;\">គ្រូរោងជាង</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានកសិកម្ម</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនគ្រូកសិកម្ម</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនសាលា</p>\n\n\t\t\t<p style=\"text-align: center;\">មានគេហកិច្ច</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំនួនគ្រូ</p>\n\n\t\t\t<p style=\"text-align: center;\">គេហកិច្ច</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_8_r0",
        "cells": [
          {
            "id": "b_8_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c1",
            "text": "ចំនួនសាលា\n\n\t\t\t មានកីឡា",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c2",
            "text": "ចំនួនគ្រូកីឡា",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c3",
            "text": "ចំនួនសាលា\n\n\t\t\t មានសិល្បះ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c4",
            "text": "ចំនួនគ្រូសិល្បះ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c5",
            "text": "ចំនួនសាលា\n\n\t\t\t មានសិល្បះ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c6",
            "text": "ចំនួនសាលា\n\n\t\t\t មានរោងជាង",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c7",
            "text": "ចំនួន\n\n\t\t\t គ្រូរោងជាង",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c8",
            "text": "ចំនួនសាលា\n\n\t\t\t មានកសិកម្ម",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c9",
            "text": "ចំនួនគ្រូកសិកម្ម",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c10",
            "text": "ចំនួនសាលា\n\n\t\t\t មានគេហកិច្ច",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_8_r0_c11",
            "text": "ចំនួនគ្រូ\n\n\t\t\t គេហកិច្ច",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_8_r1",
        "cells": [
          {
            "id": "b_8_r1_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c1",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c2",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c3",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c4",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c5",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c7",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c8",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c9",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c10",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_8_r1_c11",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "សកម្មភាពកីឡា គ្រូកីឡា សិល្បៈ រោងជាង និងបំណិនជីវិត"
  },
  {
    "id": "sec_b_9",
    "part": "B",
    "sectionNumber": "១០",
    "title": "១០. ស្ថិតិ សាលារៀនគោលដៅដែលបានអនុវត្ដកម្មវិធីទីប្រឹក្សាកុមារី",
    "englishTitle": "Girls Counseling Program (Grades 4–6)",
    "category": "ទីប្រឹក្សាកុមារី",
    "englishCategory": "Girls Counseling",
    "iconName": "ShieldAlert",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនកុមារីគោលដៅទី៤/៦</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"8\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនកុមារីមានបញ្ហាទី៤/៦</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"8\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនកុមារីមានបញ្ហាបានជួយ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្ទី៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">8=7*100/3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10=9*100/4</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">11</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12=11*100/5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">13</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">14=13*100/6</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">16=15*100/7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">18=17*100/9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">19</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">20=19*100/11</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">22=21*100/13</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">-</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_9_r0",
        "cells": [
          {
            "id": "b_9_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r0_c1",
            "text": "ចំនួនកុមារីគោលដៅទី៤/៦",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r0_c2",
            "text": "ចំនួនកុមារីមានបញ្ហាទី៤/៦",
            "rowSpan": 1,
            "colSpan": 8,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r0_c3",
            "text": "ចំនួនកុមារីមានបញ្ហាបានជួយ",
            "rowSpan": 1,
            "colSpan": 8,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_9_r1",
        "cells": [
          {
            "id": "b_9_r1_c0",
            "text": "ថ្ទី៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c1",
            "text": "ទី៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c2",
            "text": "ទី៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c3",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c4",
            "text": "ទី៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c5",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c6",
            "text": "ទី៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c7",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c8",
            "text": "ទី៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c10",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c11",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c12",
            "text": "ទី៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c13",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c14",
            "text": "ទី៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c15",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c16",
            "text": "ទី៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c17",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c18",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r1_c19",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_9_r2",
        "cells": [
          {
            "id": "b_9_r2_c0",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c1",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c2",
            "text": "4",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c3",
            "text": "5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c4",
            "text": "6",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c5",
            "text": "7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c6",
            "text": "8=7*100/3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c7",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c8",
            "text": "10=9*100/4",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c9",
            "text": "11",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c10",
            "text": "12=11*100/5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c11",
            "text": "13",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c12",
            "text": "14=13*100/6",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c13",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c14",
            "text": "16=15*100/7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c15",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c16",
            "text": "18=17*100/9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c17",
            "text": "19",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c18",
            "text": "20=19*100/11",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c19",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_9_r2_c20",
            "text": "22=21*100/13",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_9_r3",
        "cells": [
          {
            "id": "b_9_r3_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c1",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c2",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c3",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c4",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c5",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c6",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c7",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c8",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c9",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c10",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c11",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c12",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c13",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c14",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c15",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c16",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c17",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c18",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c19",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_9_r3_c20",
            "text": "-",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "កម្មវិធីទីប្រឹក្សាកុមារី ស្ថិតិកុមារីមានបញ្ហា និងដំណោះស្រាយ"
  },
  {
    "id": "sec_b_10",
    "part": "B",
    "sectionNumber": "១១",
    "title": "១១. ស្ថិតិ សិស្សក្រីក្រ",
    "englishTitle": "Underprivileged & Orphan Students",
    "category": "សិស្សជួបការលំបាក",
    "englishCategory": "Vulnerable Students",
    "iconName": "HeartHandshake",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">មានឪពុកម្ដាយ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">កំព្រាឪពុក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">កំព្រាម្ដាយ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">កំព្រាឪពុកម្ដាយ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុបរួម</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ផ្សេងៗ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ១</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ២</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ៣</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ទី ៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_10_r0",
        "cells": [
          {
            "id": "b_10_r0_c0",
            "text": "ថ្នាក់",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c1",
            "text": "មានឪពុកម្ដាយ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c2",
            "text": "កំព្រាឪពុក",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c3",
            "text": "កំព្រាម្ដាយ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c4",
            "text": "កំព្រាឪពុកម្ដាយ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c5",
            "text": "សរុបរួម",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c6",
            "text": "ស្រី",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r0_c7",
            "text": "ផ្សេងៗ",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_10_r1",
        "cells": [
          {
            "id": "b_10_r1_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c3",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c5",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_10_r1_c7",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_10_r2",
        "cells": [
          {
            "id": "b_10_r2_c0",
            "text": "ទី ១",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r2_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r3",
        "cells": [
          {
            "id": "b_10_r3_c0",
            "text": "ទី ២",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r3_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r4",
        "cells": [
          {
            "id": "b_10_r4_c0",
            "text": "ទី ៣",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r4_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r5",
        "cells": [
          {
            "id": "b_10_r5_c0",
            "text": "ទី ៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r5_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r6",
        "cells": [
          {
            "id": "b_10_r6_c0",
            "text": "ទី ៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r6_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r7",
        "cells": [
          {
            "id": "b_10_r7_c0",
            "text": "ទី ៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r7_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_10_r8",
        "cells": [
          {
            "id": "b_10_r8_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c4",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c6",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c8",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_10_r8_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ស្ថិតិសិស្សក្រីក្រ កំព្រាឪពុក កំព្រាម្ដាយ កំព្រាទាំងពីរ ពីថ្នាក់ទី១ ដល់ទី៦"
  },
  {
    "id": "sec_b_11",
    "part": "B",
    "sectionNumber": "១២",
    "title": "១២. ស្ថិតិ សិស្សពិការ",
    "englishTitle": "Students with Disabilities by Grade",
    "category": "សិស្សជួបការលំបាក",
    "englishCategory": "Inclusive Education",
    "iconName": "Accessibility",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"10\">\n\t\t\t<p style=\"text-align: center;\">ពិការកាយសម្បទា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បញ្ហាផ្លូវចិត្ត</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បញ្ហាសតិបញ្ញា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បញ្ហាផ្សេងៗ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ផ្សេងៗ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប.ចលនា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប.ស្តាប់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប.និយាយ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប.មើល</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ប.សរីរាង្គក្នុង</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី១</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី២</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៣</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_11_r0",
        "cells": [
          {
            "id": "b_11_r0_c0",
            "text": "ថ្នាក់",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r0_c1",
            "text": "ពិការកាយសម្បទា",
            "rowSpan": 1,
            "colSpan": 10,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r0_c2",
            "text": "បញ្ហាផ្លូវចិត្ត",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r0_c3",
            "text": "បញ្ហាសតិបញ្ញា",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r0_c4",
            "text": "បញ្ហាផ្សេងៗ",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r0_c5",
            "text": "ផ្សេងៗ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_11_r1",
        "cells": [
          {
            "id": "b_11_r1_c0",
            "text": "ប.ចលនា",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r1_c1",
            "text": "ប.ស្តាប់",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r1_c2",
            "text": "ប.និយាយ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r1_c3",
            "text": "ប.មើល",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_11_r1_c4",
            "text": "ប.សរីរាង្គក្នុង",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_11_r2",
        "cells": [
          {
            "id": "b_11_r2_c0",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c1",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c2",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c3",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c4",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c5",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c6",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c7",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c8",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c9",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c10",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c11",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c12",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c13",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c14",
            "text": "សរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c15",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r2_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r3",
        "cells": [
          {
            "id": "b_11_r3_c0",
            "text": "ថ្នាក់ទី១",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c1",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r3_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r4",
        "cells": [
          {
            "id": "b_11_r4_c0",
            "text": "ថ្នាក់ទី២",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c5",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c6",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r4_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r5",
        "cells": [
          {
            "id": "b_11_r5_c0",
            "text": "ថ្នាក់ទី៣",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r5_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r6",
        "cells": [
          {
            "id": "b_11_r6_c0",
            "text": "ថ្នាក់ទី៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r6_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r7",
        "cells": [
          {
            "id": "b_11_r7_c0",
            "text": "ថ្នាក់ទី៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r7_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r8",
        "cells": [
          {
            "id": "b_11_r8_c0",
            "text": "ថ្នាក់ទី៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c2",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c4",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c5",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c6",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c7",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c8",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c10",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c12",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c13",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c14",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c15",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c16",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r8_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_11_r9",
        "cells": [
          {
            "id": "b_11_r9_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c1",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c4",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c5",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c6",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c8",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c12",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c14",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c16",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_11_r9_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ពិការកាយសម្បទា ពិការភ្នែក ពិការត្រចៀក ការនិយាយ សតិបញ្ញា និងបញ្ហាផ្សេងៗ"
  },
  {
    "id": "sec_b_12",
    "part": "B",
    "sectionNumber": "១៣",
    "title": "១៣. ការងារសហគមន៏និងសំណូមពរ នានា",
    "englishTitle": "School Support Committee & Community",
    "category": "ការងារសហគមន៍",
    "englishCategory": "Community Support",
    "iconName": "UsersRound",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"17\">\n\t\t\t<p style=\"text-align: center;\">គណះកម្មការគ្រប់គ្រងសាលា(គ.គ.ស.)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"15\">\n\t\t\t<p style=\"text-align: center;\">សកម្មភាពចូលរួមធ្វើអ្វីខ្លះ?</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">11</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">4</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"15\">\n\t\t\t<p style=\"text-align: center;\">ចូលរួមប្រជុំកសាងផែនការអភិវឌ្ឍសាលា</p>\n\t\t\t</td>\n      </tr>\n\t\t<tr>\n\t\t\t<td colspan=\"15\">\n\t\t\t<p style=\"text-align: center;\">ជួយលើកទឹកចិត្តអាណាព្យាបាលសិស្សឲ្យជុំរុញសិស្សមករៀនឲ្យបានទៀងទាត់</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"15\">\n\t\t\t<p style=\"text-align: center;\">ជួយគៀងគរថវិកាអភិវឌ្ឍសាលារៀន</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_12_r0",
        "cells": [
          {
            "id": "b_12_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_12_r0_c1",
            "text": "គណះកម្មការគ្រប់គ្រងសាលា(គ.គ.ស.)",
            "rowSpan": 1,
            "colSpan": 17,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_12_r1",
        "cells": [
          {
            "id": "b_12_r1_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_12_r1_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_12_r1_c2",
            "text": "សកម្មភាពចូលរួមធ្វើអ្វីខ្លះ?",
            "rowSpan": 1,
            "colSpan": 15,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_12_r2",
        "cells": [
          {
            "id": "b_12_r2_c0",
            "text": "បស.រោគ",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_12_r2_c1",
            "text": "11",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_12_r2_c2",
            "text": "4",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_12_r2_c3",
            "text": "ចូលរួមប្រជុំកសាងផែនការអភិវឌ្ឍសាលា",
            "rowSpan": 1,
            "colSpan": 15,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_12_r3",
        "cells": [
          {
            "id": "b_12_r3_c0",
            "text": "ជួយលើកទឹកចិត្តអាណាព្យាបាលសិស្សឲ្យជុំរុញសិស្សមករៀនឲ្យបានទៀងទាត់",
            "rowSpan": 1,
            "colSpan": 15,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_12_r4",
        "cells": [
          {
            "id": "b_12_r4_c0",
            "text": "ជួយគៀងគរថវិកាអភិវឌ្ឍសាលារៀន",
            "rowSpan": 1,
            "colSpan": 15,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "គណៈកម្មការគ្រប់គ្រងសាលា (គ.គ.ស.) និងសកម្មភាពចូលរួមសហគមន៍"
  },
  {
    "id": "sec_b_13",
    "part": "B",
    "sectionNumber": "១៤",
    "title": "១៤. ស្ថិតិ សាលារៀនទ្រទ្រង់ និងឧប្ថម្ភរបស់អង្គការជាតិ អន្តរជាតិ",
    "englishTitle": "Partner NGOs & International Aid",
    "category": "អង្គការដៃគូ",
    "englishCategory": "Partner NGOs",
    "iconName": "Building2",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះអង្គការ រឺ កម្មវិធី</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"9\">\n\t\t\t<p style=\"text-align: center;\">សកម្មភាព</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">រយៈពេល</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">លទ្ធផលសម្រេចបានឆ្នាំកន្លងមក</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ទស្សនៈពិភពលោក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"9\">\n\t\t\t<p style=\"text-align: center;\">ជួយគាំទ្រសម្ភារៈអនាម័យ សម្ភារៈសិក្សា សម្ភារៈឧបទេស ជួយបំប៉នវគ្គសិក្សាដល់លោកគ្រូអ្នកគ្រូចូលរួមរាល់កិច្ចការងារលើកុមារ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">១ឆ្នាំ</p>\n\n\t\t\t<p style=\"text-align: center;\">សិក្សា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ជោគជ័យលើកិច្ចការងារទាំងស្រុង</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">អង្គការសាលាបៃតង</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"9\">\n\t\t\t<p style=\"text-align: center;\">ឧបត្ថម្ភសម្ភារៈអនាម័យ ឧបត្ថម្ភឡដុតសម្រាម ឧបត្ថម្ភកន្លែងលាងសម្អាតដៃ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">១ឆ្នាំ</p>\n\n\t\t\t<p style=\"text-align: center;\">សិក្សា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សបានប្រើប្រាស់សម្ភារៈ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">អង្គការកុមារកម្ពុជារីករាយ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"9\">\n\t\t\t<p style=\"text-align: center;\">អគារសិក្សាពហុបំណង អាហារពេលព្រឹក</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ទើបចាប់ផ្ដើម</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_13_r0",
        "cells": [
          {
            "id": "b_13_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_13_r0_c1",
            "text": "ឈ្មោះអង្គការ រឺ កម្មវិធី",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_13_r0_c2",
            "text": "សកម្មភាព",
            "rowSpan": 1,
            "colSpan": 9,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_13_r0_c3",
            "text": "រយៈពេល",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_13_r0_c4",
            "text": "លទ្ធផលសម្រេចបានឆ្នាំកន្លងមក",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_13_r1",
        "cells": [
          {
            "id": "b_13_r1_c0",
            "text": "បស.រោគ",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r1_c1",
            "text": "ទស្សនៈពិភពលោក",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r1_c2",
            "text": "ជួយគាំទ្រសម្ភារៈអនាម័យ សម្ភារៈសិក្សា សម្ភារៈឧបទេស ជួយបំប៉នវគ្គសិក្សាដល់លោកគ្រូអ្នកគ្រូចូលរួមរាល់កិច្ចការងារលើកុមារ",
            "rowSpan": 1,
            "colSpan": 9,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r1_c3",
            "text": "១ឆ្នាំ\n\n\t\t\t សិក្សា",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r1_c4",
            "text": "ជោគជ័យលើកិច្ចការងារទាំងស្រុង",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_13_r2",
        "cells": [
          {
            "id": "b_13_r2_c0",
            "text": "អង្គការសាលាបៃតង",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r2_c1",
            "text": "ឧបត្ថម្ភសម្ភារៈអនាម័យ ឧបត្ថម្ភឡដុតសម្រាម ឧបត្ថម្ភកន្លែងលាងសម្អាតដៃ",
            "rowSpan": 1,
            "colSpan": 9,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r2_c2",
            "text": "១ឆ្នាំ\n\n\t\t\t សិក្សា",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r2_c3",
            "text": "សិស្សបានប្រើប្រាស់សម្ភារៈ",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_13_r3",
        "cells": [
          {
            "id": "b_13_r3_c0",
            "text": "អង្គការកុមារកម្ពុជារីករាយ",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r3_c1",
            "text": "អគារសិក្សាពហុបំណង អាហារពេលព្រឹក",
            "rowSpan": 1,
            "colSpan": 9,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r3_c2",
            "text": "ទើបចាប់ផ្ដើម",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_13_r3_c3",
            "text": "",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ការឧបត្ថម្ភពីទស្សនៈពិភពលោក អង្គការសាលាបៃតង និងកុមារកម្ពុជារីករាយ"
  },
  {
    "id": "sec_b_14",
    "part": "B",
    "sectionNumber": "១៥",
    "title": "១៥.តារាងពិសេស",
    "englishTitle": "Special Table & Suggestions",
    "category": "សកម្មភាពពិសេស & សំណូមពរ",
    "englishCategory": "Special Activities & Suggestions",
    "iconName": "FileSpreadsheet",
    "rawTableHtml": "<p>១៥.តារាងពិសេស</p>\n<p>បញ្ជាក់: សកម្មភាពផ្សេងៗ និងសំណូមពរដែលគ្មានក្នុងតារាងស្ថិតិ</p>\n<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ចំណុច</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p style=\"text-align: center;\">ការពិពណ៌នា</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p>សំណូមពរឲ្យមានវគ្គបំប៉នសមត្ថភាពគ្រូគ្រប់រូប និងសម្ភារៈពាក់ព័ន្ធសម្រាប់ឆ្នាំសិក្សា ព្រមទាំងស្នើឲ្យថ្នាក់លើចុះជួយត្រួតពិនិត្យ</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"13\">\n\t\t\t<p>&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "b_14_r0",
        "cells": [
          {
            "id": "b_14_r0_c0",
            "text": "ចំណុច",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "b_14_r0_c1",
            "text": "ការពិពណ៌នា",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "b_14_r1",
        "cells": [
          {
            "id": "b_14_r1_c0",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_14_r1_c1",
            "text": "សំណូមពរឲ្យមានវគ្គបំប៉នសមត្ថភាពគ្រូគ្រប់រូប និងសម្ភារៈពាក់ព័ន្ធសម្រាប់ឆ្នាំសិក្សា ព្រមទាំងស្នើឲ្យថ្នាក់លើចុះជួយត្រួតពិនិត្យ",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "left",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_14_r2",
        "cells": [
          {
            "id": "b_14_r2_c0",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_14_r2_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "left",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_14_r3",
        "cells": [
          {
            "id": "b_14_r3_c0",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_14_r3_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "left",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_14_r4",
        "cells": [
          {
            "id": "b_14_r4_c0",
            "text": "4",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_14_r4_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "left",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "b_14_r5",
        "cells": [
          {
            "id": "b_14_r5_c0",
            "text": "5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "b_14_r5_c1",
            "text": "",
            "rowSpan": 1,
            "colSpan": 13,
            "align": "left",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "បញ្ជាក់: សកម្មភាពផ្សេងៗ និងសំណូមពរដែលគ្មានក្នុងតារាងស្ថិតិ"
  },
  {
    "id": "sec_a_1",
    "part": "A",
    "sectionNumber": "១",
    "title": "១.តារាងស្ថិតិសាលា អគារ បន្ទប់ សិស្ស",
    "englishTitle": "School, Buildings, Classrooms, Students",
    "category": "ទិន្នន័យទូទៅ",
    "englishCategory": "General Overview",
    "iconName": "School",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">អគារ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ចំនួនបន្ទប់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី១</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី២</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៣</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៤</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៥</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី៦</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">សរុបរួម</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ប.បរ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ផ្សេងៗ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n        <td style=\"text-align: center;\">ស្រី</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">01</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">02</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">02</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">01</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n         <td style=\"text-align: center;\">119</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "a_1_r0",
        "cells": [
          {
            "id": "a_1_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c1",
            "text": "អគារ",
            "rowSpan": 2,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c2",
            "text": "ចំនួនបន្ទប់",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c3",
            "text": "ថ្នាក់ទី១",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c4",
            "text": "ថ្នាក់ទី២",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c5",
            "text": "ថ្នាក់ទី៣",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c6",
            "text": "ថ្នាក់ទី៤",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c7",
            "text": "ថ្នាក់ទី៥",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c8",
            "text": "ថ្នាក់ទី៦",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r0_c9",
            "text": "សរុបរួម",
            "rowSpan": 1,
            "colSpan": 3,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_1_r1",
        "cells": [
          {
            "id": "a_1_r1_c0",
            "text": "ប.បរ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c1",
            "text": "ផ្សេងៗ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c3",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c5",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c6",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c7",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c8",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c9",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c10",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c11",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c12",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c13",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c14",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c15",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c16",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c17",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c18",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c19",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c20",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c21",
            "text": "ថ្នាក់",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c22",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_1_r1_c23",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_1_r2",
        "cells": [
          {
            "id": "a_1_r2_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c1",
            "text": "4",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c2",
            "text": "12",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c3",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c4",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c5",
            "text": "01",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c6",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c7",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c8",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c9",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c10",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c11",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c12",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c13",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c14",
            "text": "02",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c15",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c16",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c17",
            "text": "02",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c18",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c19",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c20",
            "text": "01",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c21",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c22",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c23",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c24",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_1_r2_c25",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "អគារ ចំនួនបន្ទប់ និងចំនួនសិស្សថ្នាក់ទី១ ដល់ទី៣"
  },
  {
    "id": "sec_a_2",
    "part": "A",
    "sectionNumber": "១(ត)",
    "title": "១.តារាងស្ថិតិសាលា អគារ បន្ទប់ សិស្ស(ត)",
    "englishTitle": "Classrooms and Students (Grades 4–6 & Total)",
    "category": "ទិន្នន័យទូទៅ",
    "englishCategory": "General Overview",
    "iconName": "GraduationCap",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">\n\t\t\t<p style=\"text-align: center;\">ឈ្មោះសាលា</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">មិនបង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"10\">\n\t\t\t<p style=\"text-align: center;\">បុគ្គលិកបង្រៀន</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ក្នុងនោះ</p>\n\n\t\t\t<p style=\"text-align: center;\">២ពេល</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ជួយប.រ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\" rowspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ក្របខ័ណ្ឌសរុប</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">នាយក+រង</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ទីចាត់ការ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">បរ.សុទ្ធ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">គូប</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">នាយករង</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">កិ .ស</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">បស.រោគ</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">16</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "a_2_r0",
        "cells": [
          {
            "id": "a_2_r0_c0",
            "text": "ឈ្មោះសាលា",
            "rowSpan": 3,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r0_c1",
            "text": "មិនបង្រៀន",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r0_c2",
            "text": "បុគ្គលិកបង្រៀន",
            "rowSpan": 1,
            "colSpan": 10,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r0_c3",
            "text": "ក្នុងនោះ\n\n\t\t\t ២ពេល",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r0_c4",
            "text": "ជួយប.រ",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r0_c5",
            "text": "ក្របខ័ណ្ឌសរុប",
            "rowSpan": 2,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_2_r1",
        "cells": [
          {
            "id": "a_2_r1_c0",
            "text": "នាយក+រង",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c1",
            "text": "ទីចាត់ការ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c2",
            "text": "បរ.សុទ្ធ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c3",
            "text": "គូប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c4",
            "text": "នាយករង",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c5",
            "text": "កិ .ស",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_2_r1_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_2_r2",
        "cells": [
          {
            "id": "a_2_r2_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c3",
            "text": "ស",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c5",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c7",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c8",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c9",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c10",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c11",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c12",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c13",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c14",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c15",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c16",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c17",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c18",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r2_c19",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_2_r3",
        "cells": [
          {
            "id": "a_2_r3_c0",
            "text": "បស.រោគ",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c1",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c2",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c3",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c4",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c5",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c6",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c8",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c10",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c12",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c13",
            "text": "10",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c14",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c16",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c17",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c18",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c19",
            "text": "16",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_2_r3_c20",
            "text": "12",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "សិស្សថ្នាក់ទី៤ ដល់ទី៦ និងសរុបរួមសាលា"
  },
  {
    "id": "sec_a_3",
    "part": "A",
    "sectionNumber": "២",
    "title": "២.លទ្ធផលសិក្សា",
    "englishTitle": "Academic Learning Results by Grade",
    "category": "លទ្ធផលសិក្សា",
    "englishCategory": "Academic Performance",
    "iconName": "Award",
    "rawTableHtml": "<table border=\"\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"18\">\n\t\t\t<p style=\"text-align: center;\">សិស្សសរុបពីថ្នាក់ទី១ ដល់៦</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ដំណាច់ឆ្នាំ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សជាប់មធ្យមភាគ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សធ្លាក់មធ្យមភាគ 0-4.99</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សធ្លាក់មធ្យមភាគ 4.00-4.99</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សបោះបង់</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1=3+7+15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2=5+9+17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4=3x100/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6=5x100/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">8=7x100/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10=9x100/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">11</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12=11x100/7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">13</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">14=13x100/9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">16=15x100/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">18=17x100/2</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ១</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ២</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៣</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "a_3_r0",
        "cells": [
          {
            "id": "a_3_r0_c0",
            "text": "ថ្នាក់",
            "rowSpan": 4,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_3_r0_c1",
            "text": "សិស្សសរុបពីថ្នាក់ទី១ ដល់៦",
            "rowSpan": 1,
            "colSpan": 18,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_3_r1",
        "cells": [
          {
            "id": "a_3_r1_c0",
            "text": "ដំណាច់ឆ្នាំ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_3_r1_c1",
            "text": "សិស្សជាប់មធ្យមភាគ",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_3_r1_c2",
            "text": "សិស្សធ្លាក់មធ្យមភាគ 0-4.99",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_3_r1_c3",
            "text": "សិស្សធ្លាក់មធ្យមភាគ 4.00-4.99",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_3_r1_c4",
            "text": "សិស្សបោះបង់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_3_r2",
        "cells": [
          {
            "id": "a_3_r2_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c3",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c4",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c5",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c7",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c8",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c10",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c11",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c12",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c13",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c14",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c15",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c16",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r2_c17",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r3",
        "cells": [
          {
            "id": "a_3_r3_c0",
            "text": "1=3+7+15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c1",
            "text": "2=5+9+17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c2",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c3",
            "text": "4=3x100/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c4",
            "text": "5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c5",
            "text": "6=5x100/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c6",
            "text": "7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c7",
            "text": "8=7x100/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c8",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c9",
            "text": "10=9x100/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c10",
            "text": "11",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c11",
            "text": "12=11x100/7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c12",
            "text": "13",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c13",
            "text": "14=13x100/9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c14",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c15",
            "text": "16=15x100/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c16",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r3_c17",
            "text": "18=17x100/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r4",
        "cells": [
          {
            "id": "a_3_r4_c0",
            "text": "ថ្នាក់ទី ១",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c1",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c2",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c3",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c5",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r4_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r5",
        "cells": [
          {
            "id": "a_3_r5_c0",
            "text": "ថ្នាក់ទី ២",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c1",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c3",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c5",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r5_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r6",
        "cells": [
          {
            "id": "a_3_r6_c0",
            "text": "ថ្នាក់ទី ៣",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c1",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c3",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c5",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r6_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r7",
        "cells": [
          {
            "id": "a_3_r7_c0",
            "text": "ថ្នាក់ទី ៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c1",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c3",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c5",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r7_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r8",
        "cells": [
          {
            "id": "a_3_r8_c0",
            "text": "ថ្នាក់ទី ៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c1",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c2",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c3",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c5",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r8_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r9",
        "cells": [
          {
            "id": "a_3_r9_c0",
            "text": "ថ្នាក់ទី ៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c1",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c2",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c3",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c5",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r9_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_3_r10",
        "cells": [
          {
            "id": "a_3_r10_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c1",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c2",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c3",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c4",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c5",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c8",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c11",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c12",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c13",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c14",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c15",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c16",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c17",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_3_r10_c18",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "លទ្ធផលសិស្សជាប់ សិស្សមធ្យម និងពូកែ"
  },
  {
    "id": "sec_a_4",
    "part": "A",
    "sectionNumber": "៣",
    "title": "៣. ស្ថិតិសិស្សធ្លាក់",
    "englishTitle": "Repeating / Failed Students Statistics",
    "category": "លទ្ធផលសិក្សា",
    "englishCategory": "Academic Performance",
    "iconName": "TrendingDown",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"10\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ១ ដល់ ៦</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ត្រួតសរុប</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ធ្វើតេស្ដជាប់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ធ្វើតេស្ដធ្លាក់</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4=3*100/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6=5*100/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">7=1-3</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">8=7*100/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9=2-5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10=9*100/2</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ១</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ២</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៣</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "a_4_r0",
        "cells": [
          {
            "id": "a_4_r0_c0",
            "text": "ថ្នាក់",
            "rowSpan": 4,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_4_r0_c1",
            "text": "ថ្នាក់ទី ១ ដល់ ៦",
            "rowSpan": 1,
            "colSpan": 10,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_4_r1",
        "cells": [
          {
            "id": "a_4_r1_c0",
            "text": "ត្រួតសរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_4_r1_c1",
            "text": "ធ្វើតេស្ដជាប់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_4_r1_c2",
            "text": "ធ្វើតេស្ដធ្លាក់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_4_r2",
        "cells": [
          {
            "id": "a_4_r2_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c3",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c4",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c5",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c6",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c7",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c8",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r2_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r3",
        "cells": [
          {
            "id": "a_4_r3_c0",
            "text": "1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c1",
            "text": "2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c2",
            "text": "3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c3",
            "text": "4=3*100/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c4",
            "text": "5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c5",
            "text": "6=5*100/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c6",
            "text": "7=1-3",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c7",
            "text": "8=7*100/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c8",
            "text": "9=2-5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r3_c9",
            "text": "10=9*100/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r4",
        "cells": [
          {
            "id": "a_4_r4_c0",
            "text": "ថ្នាក់ទី ១",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r4_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r5",
        "cells": [
          {
            "id": "a_4_r5_c0",
            "text": "ថ្នាក់ទី ២",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r5_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r6",
        "cells": [
          {
            "id": "a_4_r6_c0",
            "text": "ថ្នាក់ទី ៣",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r6_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r7",
        "cells": [
          {
            "id": "a_4_r7_c0",
            "text": "ថ្នាក់ទី ៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r7_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r8",
        "cells": [
          {
            "id": "a_4_r8_c0",
            "text": "ថ្នាក់ទី ៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r8_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r9",
        "cells": [
          {
            "id": "a_4_r9_c0",
            "text": "ថ្នាក់ទី ៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r9_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_4_r10",
        "cells": [
          {
            "id": "a_4_r10_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c1",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c2",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c3",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c4",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c5",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c6",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c7",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c8",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c9",
            "text": "0",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_4_r10_c10",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "ស្ថិតិសិស្សត្រួតថ្នាក់ ឬធ្លាក់តាមកម្រិតថ្នាក់"
  },
  {
    "id": "sec_a_5",
    "part": "A",
    "sectionNumber": "៤",
    "title": "៤.លទ្ធផលសិក្សា ក្រោយធ្វើតេស្តចុងឆ្នាំរួច",
    "englishTitle": "Post-Year-End Evaluation Results",
    "category": "លទ្ធផលសិក្សា",
    "englishCategory": "Academic Performance",
    "iconName": "ClipboardCheck",
    "rawTableHtml": "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"24\">\n\t\t\t<p style=\"text-align: center;\">សិស្សសរុបពីថ្នាក់ទី១ ដល់៦</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">ឆមាសទី១</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"2\">\n\t\t\t<p style=\"text-align: center;\">សិស្សចុងឆ្នាំ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សជាប់មធ្យមភាគ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សធ្វើតេស្តជាប់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សរុបជាប់ចុងឆ្នាំ</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សត្រួតថ្នាក់</p>\n\t\t\t</td>\n\t\t\t<td colspan=\"4\">\n\t\t\t<p style=\"text-align: center;\">សិស្សបោះបង់</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ស្រី</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">1=3+21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">2=4+23</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">3=13+17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">4=15+19</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">5</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">6=5x10/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">7</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">8=7x10/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">10=9x10/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">11</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">12=11x10/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">13=5+9</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">14=13x10/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15=7+11</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">16=15x10/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">18=17x10/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">19</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">20=19x10/2</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">22=21x10/1</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">23</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24=23x10/2</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ១</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">31</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">15</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ២</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">42</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៣</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">40</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៤</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">49</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">21</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៥</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">50</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">24</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">ថ្នាក់ទី ៦</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">35</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">17</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">សរុប</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">247</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">119</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">100%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">&nbsp;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p style=\"text-align: center;\">0%</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
    "rows": [
      {
        "id": "a_5_r0",
        "cells": [
          {
            "id": "a_5_r0_c0",
            "text": "ថ្នាក់",
            "rowSpan": 4,
            "colSpan": 1,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r0_c1",
            "text": "សិស្សសរុបពីថ្នាក់ទី១ ដល់៦",
            "rowSpan": 1,
            "colSpan": 24,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_5_r1",
        "cells": [
          {
            "id": "a_5_r1_c0",
            "text": "ឆមាសទី១",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c1",
            "text": "សិស្សចុងឆ្នាំ",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c2",
            "text": "សិស្សជាប់មធ្យមភាគ",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c3",
            "text": "សិស្សធ្វើតេស្តជាប់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c4",
            "text": "សរុបជាប់ចុងឆ្នាំ",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c5",
            "text": "សិស្សត្រួតថ្នាក់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          },
          {
            "id": "a_5_r1_c6",
            "text": "សិស្សបោះបង់",
            "rowSpan": 1,
            "colSpan": 4,
            "align": "center",
            "isTh": true,
            "isHeader": true,
            "isEditable": false
          }
        ],
        "isHeaderRow": true
      },
      {
        "id": "a_5_r2",
        "cells": [
          {
            "id": "a_5_r2_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c1",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c2",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c3",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c4",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c5",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c6",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c7",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c8",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c9",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c10",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c11",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c12",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c13",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c14",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c15",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c16",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c17",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c18",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c19",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c20",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c21",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c22",
            "text": "ស្រី",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r2_c23",
            "text": "%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r3",
        "cells": [
          {
            "id": "a_5_r3_c0",
            "text": "1=3+21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c1",
            "text": "2=4+23",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c2",
            "text": "3=13+17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c3",
            "text": "4=15+19",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c4",
            "text": "5",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c5",
            "text": "6=5x10/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c6",
            "text": "7",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c7",
            "text": "8=7x10/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c8",
            "text": "9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c9",
            "text": "10=9x10/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c10",
            "text": "11",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c11",
            "text": "12=11x10/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c12",
            "text": "13=5+9",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c13",
            "text": "14=13x10/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c14",
            "text": "15=7+11",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c15",
            "text": "16=15x10/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c16",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c17",
            "text": "18=17x10/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c18",
            "text": "19",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c19",
            "text": "20=19x10/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c20",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c21",
            "text": "22=21x10/1",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c22",
            "text": "23",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r3_c23",
            "text": "24=23x10/2",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r4",
        "cells": [
          {
            "id": "a_5_r4_c0",
            "text": "ថ្នាក់ទី ១",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c1",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c2",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c3",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c4",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c5",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c7",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c13",
            "text": "31",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c15",
            "text": "15",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r4_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r5",
        "cells": [
          {
            "id": "a_5_r5_c0",
            "text": "ថ្នាក់ទី ២",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c1",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c3",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c4",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c5",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c7",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c13",
            "text": "42",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c15",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r5_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r6",
        "cells": [
          {
            "id": "a_5_r6_c0",
            "text": "ថ្នាក់ទី ៣",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c1",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c3",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c4",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c5",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c7",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c13",
            "text": "40",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c15",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r6_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r7",
        "cells": [
          {
            "id": "a_5_r7_c0",
            "text": "ថ្នាក់ទី ៤",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c1",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c2",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c3",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c4",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c5",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c7",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c13",
            "text": "49",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c15",
            "text": "21",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r7_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r8",
        "cells": [
          {
            "id": "a_5_r8_c0",
            "text": "ថ្នាក់ទី ៥",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c1",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c2",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c3",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c4",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c5",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c7",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c13",
            "text": "50",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c15",
            "text": "24",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r8_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r9",
        "cells": [
          {
            "id": "a_5_r9_c0",
            "text": "ថ្នាក់ទី ៦",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c1",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c2",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c3",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c4",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c5",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c7",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c13",
            "text": "35",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c15",
            "text": "17",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r9_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      },
      {
        "id": "a_5_r10",
        "cells": [
          {
            "id": "a_5_r10_c0",
            "text": "សរុប",
            "rowSpan": 1,
            "colSpan": 2,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c1",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c2",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c3",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c4",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c5",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c6",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c7",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c8",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c9",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c10",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c11",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c12",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c13",
            "text": "247",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c14",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c15",
            "text": "119",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c16",
            "text": "100%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c17",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c18",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c19",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c20",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c21",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c22",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c23",
            "text": "",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          },
          {
            "id": "a_5_r10_c24",
            "text": "0%",
            "rowSpan": 1,
            "colSpan": 1,
            "align": "center",
            "isTh": false,
            "isHeader": false,
            "isEditable": true
          }
        ],
        "isHeaderRow": false
      }
    ],
    "summaryNote": "លទ្ធផលតេស្តចុងឆ្នាំក្រោយពេលធ្វើការវាយតម្លៃ"
  }
];
