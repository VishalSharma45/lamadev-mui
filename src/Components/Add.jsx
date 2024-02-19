import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px"
});

const Add = () => {

    const [open, setOpen] = useState(false);
    
    return (
        <>
            <Tooltip
                onClick={(e) => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            onClick={(e) => setOpen(true)}
                        />
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add