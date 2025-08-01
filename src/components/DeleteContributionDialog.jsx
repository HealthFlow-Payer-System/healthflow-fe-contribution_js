import React, { Component } from "react";
import { injectIntl } from 'react-intl';
import { useTheme, styled } from "@mui/material/styles";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import { FormattedMessage } from "@openimis/fe-core";

const StyledButton = styled(Button)(({ theme }) => ({
  '& .primaryButton': theme.dialog.primaryButton,
  '& .secondaryButton': theme.dialog.secondaryButton,
}));

class DeleteContributionDialog extends Component {

    render() {
        const { contribution, onCancel, onConfirm } = this.props;
        return (
            <Dialog
                open={!!contribution}
                onClose={onCancel}
            >
                <DialogTitle>
                    <FormattedMessage
                        module="contribution"
                        id="deleteContributionDialog.title"
                    />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <FormattedMessage
                            module="contribution"
                            id="deleteContributionDialog.message"
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={e => onConfirm()} className="primaryButton" autoFocus>
                        <FormattedMessage module="contribution" id="deleteContributionDialog.yes.button" />
                    </StyledButton>
                    <StyledButton onClick={onCancel} className="secondaryButton" >
                        <FormattedMessage module="core" id="cancel"/>
                    </StyledButton>
                </DialogActions>
            </Dialog>
        )
    }
}

export default injectIntl(DeleteContributionDialog);