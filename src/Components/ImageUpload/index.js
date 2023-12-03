import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const ImageUpload = ({ label, onImageSelect, initialImage   }) => {
    const [image, setImage] = useState(initialImage || null);
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(URL.createObjectURL(img));
            onImageSelect(img);
        }
    };

    return (
        <Box textAlign="center" p={2}>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
            />
            <Box mt={2}>
                {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
            </Box>
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span">
                    {label}
                </Button>
            </label>
            
        </Box>
    );
};

export default ImageUpload;
