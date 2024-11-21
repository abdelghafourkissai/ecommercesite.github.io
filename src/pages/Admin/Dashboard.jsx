import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { products as initialProducts } from "../../utils/products"; 
import "./Dashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("add"); // "add" ou "edit"
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    category: "",
    shortDesc: "",
  });
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Ouvrir la modal pour ajouter ou modifier un produit
  const handleOpenDialog = (type, product = null) => {
    setDialogType(type);
    setSelectedProduct(product);
    setNewProduct(
      product || {
        productName: "",
        price: "",
        category: "",
        shortDesc: "",
      }
    );
    setOpenDialog(true);
  };

  // Fermer la modal
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  // Supprimer un produit
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setNotification({
      open: true,
      message: "Produit supprimé avec succès.",
      severity: "success",
    });
  };

  // Ajouter ou modifier un produit
  const handleSave = () => {
    if (dialogType === "add") {
      const newId = String(products.length + 1).padStart(2, "0");
      const newProductToAdd = {
        ...newProduct,
        id: newId,
        price: parseFloat(newProduct.price),
        imgUrl: "default-image.png", // Image par défaut
      };
      setProducts([...products, newProductToAdd]);
      setNotification({
        open: true,
        message: "Produit ajouté avec succès.",
        severity: "success",
      });
    } else if (dialogType === "edit" && selectedProduct) {
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id
            ? { ...selectedProduct, ...newProduct }
            : product
        )
      );
      setNotification({
        open: true,
        message: "Produit modifié avec succès.",
        severity: "success",
      });
    }
    handleCloseDialog();
  };

  // Gérer les notifications
  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog("add")}
        style={{ marginBottom: "20px" , marginLeft:"1500px" }}
      >
        Ajouter un Produit
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>Catégorie</TableCell>
              <TableCell>Description Courte</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.shortDesc}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenDialog("edit", product)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal pour ajouter/modifier un produit */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === "add" ? "Ajouter un Produit" : "Modifier un Produit"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Nom du produit"
            fullWidth
            margin="normal"
            value={newProduct.productName}
            onChange={(e) =>
              setNewProduct({ ...newProduct, productName: e.target.value })
            }
          />
          <TextField
            label="Prix"
            fullWidth
            margin="normal"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <TextField
            label="Catégorie"
            fullWidth
            margin="normal"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
          <TextField
            label="Description Courte"
            fullWidth
            margin="normal"
            value={newProduct.shortDesc}
            onChange={(e) =>
              setNewProduct({ ...newProduct, shortDesc: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="error">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdminDashboard;
