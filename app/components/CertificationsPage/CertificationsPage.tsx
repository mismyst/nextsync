"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
// Certification card component
const CertificationCard: React.FC<{
  title: string
  instructor: string
  date: string
  rating: number
  image: string
}> = ({ title, instructor, date, rating, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg?height=300&width=400"} alt={title} fill className="object-cover" />
        <div className="absolute right-2 top-2 flex items-center rounded-md bg-black/70 px-1.5 py-0.5 text-white">
          <span className="mr-1">★</span>
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <p className="text-xs text-gray-300">{date}</p>
        <h3 className="mt-1 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-300">by {instructor}</p>
      </div>
    </div>
  )
}

// Pagination component
const Pagination: React.FC<{
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-8 flex items-center justify-end gap-2">
      <span className="text-sm text-gray-500">{totalPages} pages</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentPage === i + 1 ? "bg-emerald-500 text-white" : "border border-gray-300 text-gray-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

// Main CertificationsPage component
const CertificationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Certification data
  const certifications = [
    {
      id: 1,
      title: "Ethical Hacking",
      instructor: "Laura Peterson",
      date: "Feb 2025",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Data Structures",
      instructor: "Alice Cooper",
      date: "Jan 2025",
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "HTML CSS",
      instructor: "Kennedy",
      date: "Jun 2021",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "NVIDIA",
      instructor: "Robert Lewis",
      date: "Jan 2023",
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Digital Marketing",
      instructor: "Emma Harris",
      date: "Aug 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Computer Architecture",
      instructor: "Kim K",
      date: "Jun 2022",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      title: "Introduction to ML",
      instructor: "Rebecca",
      date: "Sept 2024",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      title: "Java coding camp 2023",
      instructor: "Aashish K",
      date: "Jun 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      title: "AI in Robotics",
      instructor: "Kelly",
      date: "Sept 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 10,
      title: "Blockchain",
      instructor: "Michael Thompson",
      date: "Nov 2023",
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 11,
      title: "Cyber Security",
      instructor: "Jack",
      date: "Jun 2024",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 12,
      title: "Web Development",
      instructor: "Harish K",
      date: "Jun 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 13,
      title: "Cloud Computing",
      instructor: "Sarah Johnson",
      date: "Mar 2024",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 14,
      title: "Assembly Language",
      instructor: "Kendrik",
      date: "Aug 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 15,
      title: "Introduction to AI",
      instructor: "Don Toll",
      date: "Feb 2023",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Filter certifications based on search query
  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Get current page certifications
  const currentCertifications = filteredCertifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage)

  return (
    <div className="min-h-screen bg-white">

      {/* Main content */}
      <main className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-emerald-500">Certifications</h1>
          <p className="mt-2 text-gray-600">Unlock your potential and earn your certification!</p>
        </div>

        {/* Search bar and pagination */}
        <div className="mb-8 flex items-center justify-between">
          <div className="relative flex w-full max-w-md items-center rounded-full bg-emerald-100/70 px-4 py-2">
            <Search className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder='Search for "Artificial Intelligence"'
              className="w-full bg-transparent text-sm outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              title={certification.title}
              instructor={certification.instructor}
              date={certification.date}
              rating={certification.rating}
              image={certification.image}
            />
          ))}
        </div>

        {/* Mobile pagination */}
        <div className="mt-8 block sm:hidden">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>

    </div>
  )
}

export default CertificationsPage