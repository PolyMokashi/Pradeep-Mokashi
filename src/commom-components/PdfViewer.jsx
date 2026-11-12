import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Box, IconButton, Typography } from '@mui/joy'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set up pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const PdfViewer = ({ src, mode }) => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(true)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
        setLoading(false)
    }

    function goToPrevPage() {
        setPageNumber((prev) => Math.max(prev - 1, 1))
    }

    function goToNextPage() {
        setPageNumber((prev) => Math.min(prev + 1, numPages))
    }

    const controlsStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mt: 2,
        mb: 1,
    }

    const buttonStyle = {
        backgroundColor: mode === 'on' ? '#1976d2' : '#424242',
        color: '#fff',
        '&:hover': {
            backgroundColor: mode === 'on' ? '#1565c0' : '#616161',
        },
        '&:disabled': {
            backgroundColor: mode === 'on' ? '#e0e0e0' : '#303030',
            color: mode === 'on' ? '#9e9e9e' : '#616161',
        },
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}
        >
            {/* Page Controls - Top */}
            <Box sx={controlsStyle}>
                <IconButton
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    sx={buttonStyle}
                    size="sm"
                >
                    <NavigateBeforeIcon />
                </IconButton>
                <Typography
                    level="body-md"
                    sx={{ color: mode === 'on' ? '#333' : '#ccc', minWidth: 100, textAlign: 'center' }}
                >
                    Page {pageNumber} of {numPages || '...'}
                </Typography>
                <IconButton
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    sx={buttonStyle}
                    size="sm"
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>

            {/* PDF Document */}
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: mode === 'on' ? '#e0e0e0' : '#424242',
                    borderRadius: 2,
                    overflow: 'hidden',
                    maxWidth: '100%',
                    boxShadow: mode === 'on' 
                        ? '0 4px 20px rgba(0,0,0,0.1)' 
                        : '0 4px 20px rgba(0,0,0,0.4)',
                }}
            >
                <Document
                    file={src}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <Box sx={{ p: 4, textAlign: 'center' }}>
                            <Typography level="body-md" sx={{ color: mode === 'on' ? '#333' : '#ccc' }}>
                                Loading PDF...
                            </Typography>
                        </Box>
                    }
                    error={
                        <Box sx={{ p: 4, textAlign: 'center' }}>
                            <Typography level="body-md" sx={{ color: 'red' }}>
                                Failed to load PDF. Please try again.
                            </Typography>
                        </Box>
                    }
                >
                    <Page
                        pageNumber={pageNumber}
                        width={Math.min(500, window.innerWidth - 80)}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                    />
                </Document>
            </Box>

            {/* Page indicator at bottom */}
            {!loading && (
                <Typography
                    level="body-sm"
                    sx={{ 
                        mt: 1, 
                        color: mode === 'on' ? '#666' : '#999',
                        fontStyle: 'italic'
                    }}
                >
                    Use arrows to navigate pages
                </Typography>
            )}
        </Box>
    )
}

export default PdfViewer
