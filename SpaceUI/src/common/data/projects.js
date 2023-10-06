const projects = [
  {
    id: 0,
    img: "/assets/images/companies/img-1.png",
    name: "New admin Design",
    description: "It will be as simple as Occidental",
    status: "Completed",
    color: "success",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      {
        id: 3, img: "Null", name: "A", color: "success", fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Backend" }],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "assets/images/users/avatar-2.jpg",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "assets/images/users/avatar-3.jpg",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 1,
    img: "/assets/images/companies/img-2.png",
    name: "Brand logo design",
    description: "To achieve it would be necessary",
    status: "Pending",
    color: "warning",
    dueDate: "22 Oct, 19",
    commentsCount: 183,
    team: [
      { id: 1, img: "assets/images/users/avatar-8.jpg" },
      { id: 2, img: "assets/images/users/avatar-2.jpg", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "assets/images/users/avatar-2.jpg",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "assets/images/users/avatar-3.jpg",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
]

const options = {
  chart: {
    height: 290,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
  },
  yaxis: {
    title: {
      text: "% (Percentage)",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week",
    },
  },
  colors: ["#556ee6"],
}

const series = [
  {
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
  },
]

const MOCK_DATA = {
  projects, options, series
}

export default MOCK_DATA;
